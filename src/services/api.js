import axios from "axios";

// const token = process.env.REACT_APP_TOKEN;s
const baseUrl = "http://localhost:5000/";
// const headers = {
//   headers: { "GB-Access-Token": token },
// };

const api = {
  fetchUrls: async () =>
    await axios
      .get(baseUrl)
      .then((res) => res.data)
      .catch((err) => console.error(err.message)),

  createShortUrl: async (longUrl, slug) => {
    const data = slug ? { longUrl, slug } : { longUrl };
    return await axios
      .post("http://localhost:5000/api/url/shorten", { data })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err.message));
  },

  deleteUrl: async (urlCode) =>
    await axios.delete(baseUrl + urlCode).then((res) => res.data),
};

export default api;
