function xhrAdapter(config) {
  const requestData = config.data;
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText)[0]);
          xhr = null;
        } else {
          reject("请求失败");
          xhr = null;
        }
      }
    };
    xhr.send(requestData);
  });
}

export default xhrAdapter;
