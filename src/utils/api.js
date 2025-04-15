import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    
  }
})

// const api = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   params: {
//     api_key: API_KEY,  // 쿼리 파라미터로 api_key 전달
//     language: "ko-KR", // 기본적으로 한국어로 설정 가능
//   },
// });

// 요청 인터셉터 추가 (선택사항, 요청 전 후처리 가능)
axios.interceptors.request.use(function (config) {
  // 요청을 보내기 전에 처리할 작업
  return config;
}, function (error) {
  // 요청 에러 처리
  return Promise.reject(error);
});

// 응답 인터셉터 추가 (선택사항, 응답 후 처리)
axios.interceptors.response.use(function (response) {
  // 응답 성공 시 처리할 작업
  return response;
}, function (error) {
  // 응답 에러 처리
  return Promise.reject(error);
});

export default api;