import axios from "axios";
//matches with back-end routes folder>taskAPI.js

export default {
  //Gets all the BP data
  getBPData: function () {
    return axios.get("/api/bp/");
  },
  //Saves one BP data to Mongodb
  saveBP: function (Data) {
    return axios.post("/api/bp", Data);
  },
  //Deletes a single taskBP data with the given id
  deleteBP: function (id) {
    return axios.delete(`/api/bp/${id}`);
  },
  //Gets a single BP data with the given id
  getBP: function (id) {
    return axios.post(`/api/bp/${id}`);
  },
  //Updates a single BP data with the given id
  updateBP: function (id, data) {
    return axios.put(`/api/bp/${id}`, data);
  }
};
