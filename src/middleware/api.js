import Immutable from 'immutable';
import axios from 'axios';
const querystring = require('querystring');

const ajax = (url, method, params, payload) => {
  const fullUrl = /^http/.test(url) ? url : url;
  let formData;
  if (payload) {
    formData = params;
  } else {
    for (let attr in params) {
      if (params[attr] && params[attr].constructor === Array) {
        params[attr] = '[' + params[attr].join(',') + ']';
      }
    }
    formData = querystring.stringify(params);
  }
  method = method || params ? 'post' : 'get';
  return axios({
    method,
    url: fullUrl + ( method === 'get' ? '?' + formData : '' ),
    data: ( method !== 'get' ? formData : {} ),
    headers: {
      Authorization: localStorage.getItem('token'),
      'x-csrf-token': document.getElementById('_csrf_').value,
    },
  }).then(response => {
    if (response.data.success) {
      return Promise.resolve(Immutable.fromJS(response.data));
    } else {
      return Promise.reject(response.data);
    }
  });
};

export default () => next => action => {
  const NOW_API = Object.keys(action)[0];
  if (NOW_API === 'type') {
    return next(action);
  }
  const API = action[NOW_API];

  const { types, url, method, params, payload, extraData } = API;

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[NOW_API];
    return finalAction;
  };

  const [REQUESTTYPE, SUCCESSTYPE, FAILURETYPE] = types;

  next(actionWith({
    type: REQUESTTYPE,
    url,
    params,
    extraData,
  }));
  return ajax(url, method, params, payload).then(
    response => {
      next(actionWith({
        type: SUCCESSTYPE,
        response,
        params,
        extraData,
      }));
      return Promise.resolve(response);
    },
    error => {
      next(actionWith({
        type: FAILURETYPE,
        response: Immutable.fromJS({
          success: false
        }),
        params,
        extraData,
      }));
      next(actionWith({
        type: 'MESSAGE_SHOW',
        params: {
          data: {
            title: '错误',
            content: '暂无内容',
          },
          type: 'error',
        },
      }));
      clearTimeout(window.messageTimer);
      window.messageTimer = setTimeout(() => next(actionWith({ type: 'MESSAGE_HIDE' })), 8000);
      return Promise.reject(error, '请求失败！');
    }
  );
};
