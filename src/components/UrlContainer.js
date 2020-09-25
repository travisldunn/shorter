import React from "react";

export default ({ urlList, deleteUrl }) => {
  return (
    <div className="urlsContainer">
      <h1>The Short List</h1>
      {urlList.map((url, idx) => {
        return (
          <div className="urlBox" key={idx}>
            <button
              className={"deleteButton"}
              onClick={() => deleteUrl(url.urlCode)}
            >
              X
            </button>
            <div>
              <h5>Short:</h5>
              <a href={url.shortUrl}>{url.shortUrl}</a>
            </div>
            {url.slug && (
              <div>
                <h5>Nickname:</h5>
                <a href={url.shortUrl}>{url.slug}</a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
