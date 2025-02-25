import { forEach, merge } from "../utils";
import dispatchRequest from "./dispatchRequest";
import InterceptorManager from "./InterceptorManager"
// axios创建流程
// function Axios(defaults) {
//   this.defaults = defaults;
//   this.interceptors = {
//     request: "请求拦截器",
//     response: "响应拦截器",
//   };
// }
// Axios.prototype.request = function (config = { method: "get" }) {
//   console.log(`发送${config.method}请求`);
// };
// 发送请求流程
// function Axios(defaults) {
//   this.defaults = defaults;
//   this.interceptors = {
//     request: "请求拦截器",
//     response: "响应拦截器"
//   };
// }
// Axios.prototype.request = function (config = { method: "get" }) {
//   const chain = [dispatchRequest, undefined];
//   let promise = Promise.resolve(config);
  
//   while (chain.length) {
//     promise = promise.then(chain.shift(), chain.shift());
//   }
//   return promise;
// };

// 拦截器
function Axios(defaults) {
  this.defaults = defaults;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios.prototype.request = function (config) {
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }
  config.method = config.method ? config.method.toLowerCase() : 'get'
  const chain = [dispatchRequest, undefined];
  let promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }
  return promise;
};


forEach(
  ["delete", "get", "head", "options"],
  function forEachMethodNoData(method) {
    Axios.prototype[method] = function (url, config) {
      return this.request(
        merge(config || {}, {
          method: method,
          url: url,
        })
      );
    };
  }
);

forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  Axios.prototype[method] = function (url, data, config) {
    return this.request(
      merge(config || {}, {
        method: method,
        url: url,
        data: data,
      })
    );
  };
});

export default Axios;
