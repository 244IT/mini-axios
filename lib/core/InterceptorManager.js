import { forEach } from "../utils";
function InterceptorManager() {
    this.handlers = [];
}

InterceptorManager.prototype.use = function (fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
};

InterceptorManager.prototype.forEach = function (fn) {
    forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
};

export default InterceptorManager