let httpUrl = "http://www.gdutrex.top:8080";
let fetchPost = function(url, params) {
  return new Promise((res, rej) => {
    fetch(`${httpUrl}${url}`, {
      method: "POST",
      // mode: "cors", // 允许发送跨域请求
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    })
      .then(e => {
        return e.json();
      })
      .then(data => {
        res(data);
      })
      .catch(data => {
        rej(data);
      });
  });
};
let fetchGet = function(url) {
  return new Promise((res, rej) => {
    fetch(`${httpUrl}${url}`, {
      method: "GET",
      mode: "cors", // 允许发送跨域请求
      header: {}
    })
      .then(data => {
        res(data);
      })
      .catch(data => {
        rej(data);
      });
  });
};
export { fetchPost, fetchGet };
