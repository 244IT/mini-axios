import Axios from "./core/Axios";
import defaults from "./defaults";
import { extend } from "./utils";

function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  const instance = Axios.prototype.request.bind(context);
  extend(instance, Axios.prototype);
  extend(instance, context);
  return instance;
}

const axios = createInstance(defaults);
axios.create = function create(instanceConfig) {
  return createInstance("默认配置" + instanceConfig);
};

window.axios = axios;
