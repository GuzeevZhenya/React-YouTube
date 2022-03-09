import * as axios from "axios";
const key = "AIzaSyAbrSA5hr8gmlPTcWZ1cmpIfjNC1it0VKw";
const maxResult = 4;
const search = "Чем кормить кота";
// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAbrSA5hr8gmlPTcWZ1cmpIfjNC1it0VKw&type=video&q=ajax

export const videoApi = {
  getVideo(name = search,maxResult = 4) {
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
