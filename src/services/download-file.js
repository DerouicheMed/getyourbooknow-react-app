import React from "react";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const downloadFile = (book) => {
  var xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var url = (window.URL || window.webkitURL).createObjectURL(xhr.response);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      a.download = `${book.title}.zip`;
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
      }, 5000);
    }
  };
  xhr.open("GET", `${SERVER_URL}/api/books/download/${book._id}`);
  xhr.setRequestHeader("Authorization", "Bearer ");

  xhr.send();
};
