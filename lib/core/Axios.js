import { forEach } from "../utils";

function Axios(defaults) {
  this.defaults = defaults;
  this.interceptors = {
    request: "请求拦截器",
    response: "响应拦截器",
  };
}

Axios.prototype.request = function (config = { method: "get" }) {
  console.log(`发送${config.method}请求`);
};

forEach(
  ["delete", "get", "head", "options"],
  function forEachMethodNoData(method) {
    Axios.prototype[method] = function () {
      return this.request({ method });
    };
  }
);

forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  Axios.prototype[method] = function () {
    return this.request({ method });
  };
});

export default Axios;
