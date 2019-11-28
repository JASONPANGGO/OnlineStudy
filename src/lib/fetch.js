let httpUrl = "http://localhost:3000";
let fetchPost = function(url, params) {
  return new Promise((res, rej) => {
    fetch(`${httpUrl}${url}`, {
      method: "POST",
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
export { fetchPost };
