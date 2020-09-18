import React from "react";

const UrlContainer = ({ urlList, deleteUrl }) => {
  console.log(urlList);
  return (
    <div className="urlsContainer">
      <h1>The Short List</h1>

      {urlList.map((url, idx) => {
        return (
          <div className="urlBox" key={idx}>
            <button
              className={"deleteButton"}
              onClick={() => deleteUrl(url.slug)}
            >
              X
            </button>
            <div>
              <h5>Nickname:</h5>
              <a href={url.short_url}>{url.slug}</a>
            </div>
            <div>
              <h5>Short:</h5>
              <a href={url.short_url}>{url.short_url}</a>
            </div>
            <div>
              <h5>Long:</h5>
              <a href={url.url}>{url.url}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UrlContainer;
