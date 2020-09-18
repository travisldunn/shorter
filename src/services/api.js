import axios from "axios";

const token = process.env.REACT_APP_TOKEN;
const baseUrl = "http://api.bely.me/links/";
const headers = {
  headers: { "GB-Access-Token": token },
};

const api = {
  fetchUrls: async () =>
    await axios
      .get(baseUrl, headers)
      .then((res) => res.data)
      .catch((err) => console.error(err.message)),

  createShortUrl: async (url, slug) => {
    const data = slug ? { url: url, slug: slug } : { url };
    return await axios
      .post(baseUrl, { data }, headers)
      .then((res) => res.data)
      .catch((err) => console.log(err.message));
  },

  deleteUrl: async (slug) =>
    await axios.delete(baseUrl + slug, headers).then((res) => res.data),
};

export default api;
