import defaults from "../defaults";

function dispatchRequest(config) {
  const adapter = config.adapter || defaults.adapter;
  return adapter(config).then(
    (res) => {
      return res;
    },
    (err) => {
      return err;
    }
  );
}

export default dispatchRequest;
