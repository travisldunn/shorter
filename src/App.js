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
      setUrlList(list);
    };
    fetchUrls();
  }, []);

  const onSubmit = async (data) => {
    let list = urlList;
    if (!isValid(data, list)) return;
    const short = await api.createShortUrl(data.long_url, data.slug);
    setUrlList((list) => [...list, short]);
  };

  const deleteUrl = async (slug) => {
    let list = urlList;
    await api.deleteUrl(slug);
    list = list.filter((url) => url.slug !== slug);
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
