import { Axios } from 'axios';
// ここでヘッダーなどの定義をする
const axios = new Axios({
  baseURL: "http:",
  headers: {
      "Content-Type": "application/json",
  },
  responseType: "json",
  transformRequest: [function (data) {
      // リクエストデータの変換処理
      console.log("変換後：",JSON.stringify(data));
      return JSON.stringify(data);
    }],
  transformResponse: [function (data) {
      //　レスポンスデータの変換処理
      console.log("変換後：",JSON.parse(data))
      return JSON.parse(data);
  }]
});

export default axios;