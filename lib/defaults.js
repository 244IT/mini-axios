import xhrAdapter from "./adapters/xhr";

function getDefaultAdapter() {
  let adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    // For browsers use XHR adapter
    //引入用于发送 AJAX 请求的适配器
    adapter = xhrAdapter;
  } else if (
    typeof process !== "undefined" &&
    Object.prototype.toString.call(process) === "[object process]"
  ) {
    // For node use HTTP adapter
    adapter = Promise.resolve("node的http请求");
  }
  return adapter;
}
const defaults = {
  //适配器
  adapter: getDefaultAdapter(),
  // ...
};

export default defaults;
