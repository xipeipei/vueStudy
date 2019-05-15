// 完整配置:https://github.com/axios/axios#request-config

import axios from "axios";
// import { getCookie, removeCookie } from "@/common/lib/tools";
import { Message } from "iview";

axios.defaults.timeout = 60 * 1e3; // 超时设定
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem('gztToken');
    // request interceptors
    if (token) {
      Object.assign(config.headers, {
        "X-Token": token
      });
    }
    if (config.method === "get") {
      config.params = {
        _t: new Date().getTime(),
        ...config.params
      };
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    let href = encodeURIComponent(window.location.href);
    // response interceptors
    if (error.response) {
      switch (error.response.status) {
        case 401:
          sessionStorage.removeItem('gztToken');
          sessionStorage.removeItem('userId')
          // removeCookie("gztToken");
          Message.error("登录状态错误，请重新登录或重试。");
          // window.location.href = ``;
          break;
      }
    }
    return Promise.reject(error);
  }
);

export function ajax(json) {
  return new Promise((resolve, reject) => {
    let config = {
      url: json.url,
      method: json.method || "GET",
      data: json.data || {},
      params: json.params || {}
    };
    json.headers && (config.headers = json.headers);
    json.onUploadProgress && (config.onUploadProgress = json.onUploadProgress);
    json.onUploadProgress && (config.timeout = 0);
    json.onUploadProgress && (config.maxContentLength = 2000);
    config.timeout = json.timeout === 0 && 0;
    axios(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
