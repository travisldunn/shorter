import React, { useState, useEffect } from "react";
import UrlContainer from "./components/UrlContainer";
import api from "./services/api";
import Form from "./components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import isValid from "./utils/isValid";

const App = () => {
  const [urlList, setUrlList] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const list = await api.fetchUrls();
      if (list) setUrlList(list);
    };
    fetchUrls();
  }, []);

  const onSubmit = async (data) => {
    let list = urlList;
    if (!isValid(data, list)) return;
    const short = await api.createShortUrl(data.long_url, data.slug);
    if (short) setUrlList((list) => [...list, short]);
  };

  const deleteUrl = async (urlCode) => {
    let list = urlList;
    await api.deleteUrl(urlCode);
    list = list.filter((url) => url.urlCode !== urlCode);
    setUrlList(list);
  };

  return (
    <div className="main">
      <ToastContainer position="top-left" />
      <header className="spacer">
        <h1>shorter!</h1>
        <p>The best url shortener that you've used today</p>
      </header>
      <Form onSubmit={onSubmit} />
      {urlList.length > 0 && (
        <UrlContainer deleteUrl={deleteUrl} urlList={urlList} />
      )}
      <footer></footer>
    </div>
  );
};

export default App;
