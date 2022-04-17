import { forEach, merge } from "../utils";
import dispatchRequest from "./dispatchRequest";
function Axios(defaults) {
  this.defaults = defaults;
  this.interceptors = {
    request: "请求拦截器",
    response: "响应拦截器",
  };
}

Axios.prototype.request = function (config = { method: "get" }) {
  const chain = [dispatchRequest, undefined];
  let promise = Promise.resolve(config);
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
