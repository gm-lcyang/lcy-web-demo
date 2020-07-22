import Immutable from 'immutable';
import axios from 'axios';
const querystring = require('querystring');

const ajax = (url, method, params, payload) => {
  const fullUrl = /^http/.test(url) ? url : url.replace(/\/$/, '') + '/'  + url;
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
      return Promise.reject(error, '请求失败！');
    }
  );
};