const axios = require("axios");
axios
  .post(
    "http://localhost:3000",
    {},
    {
      headers: {
        "cache-control": "no-cache",
        "accept-encoding": "gzip, deflate",
        "user-agent": "PostmanRuntime/7.20.1"
      }
    }
  )
  .then(data => {
    console.log(data);
  });
