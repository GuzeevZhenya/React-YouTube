import * as axios from "axios";
const key = "AIzaSyBM3Bugpu8gvnH1ON6QuLtpkr_3qpbuWyc";
const maxResult = 4;
const search = "Чем кормить кота";
const id = '5qtC-tsQ-wE';
// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBM3Bugpu8gvnH1ON6QuLtpkr_3qpbuWyc&type=video&q=ajax


//Статистика
// https://www.googleapis.com/youtube/v3/videos?part=statistics&id=5qtC-tsQ-wE&key=AIzaSyBM3Bugpu8gvnH1ON6QuLtpkr_3qpbuWyc&t

//Данные по видео
export const videoApi = {
  getVideo(name = search,maxResult = 12) {
    return axios
      .get(
        ` https://www.googleapis.com/youtube/v3/search?key=` +
          key +
          "&type=video&part=snippet&maxResults=" +
          maxResult +
          "&q=" +
          name + '&order=date'
      )
      .then((resonse) => resonse.data);
  },
};


//Подробная инфа по видео
export const videoInfoApi = {
  getVideoInfo(id) {
    return axios
      .get(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${key}`
    )
  }
}
