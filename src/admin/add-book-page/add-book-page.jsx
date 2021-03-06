import React, { useState } from "react";
import "./add-book-page.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const AddBookPage = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    file: "",
    isbn: "",
    year: "",
    bookFile: null,
    bookThumbnail: null,
  });
  const [fileUploadProgress, setFileUploadProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${SERVER_URL}/api/admin/check-authentication`, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => setLoading(false))
      .catch((err) => {
        if (
          err.response === undefined ||
          err.response === null ||
          err.response.status === 500
        )
          history.push("/500");
        else if (err.response.status === 404) {
          history.push("/404");
        } else if (err.response.status === 403) {
          history.push("/404");
        }
      });
  }, []);

  const onChange = (event) => {
    const target = event.target;
    const value = target.type === "file" ? target.files[0] : target.value;
    const name = target.name;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("files", form.bookFile);
    formData.append("files", form.bookThumbnail);
    try {
      let response = await axios.post(`${SERVER_URL}/api/books`, form, {
        headers: { authorization: localStorage.getItem("token") },
      });
      let bookId = response.data._id;
      console.log(response.data._id);
      await axios.post(`${SERVER_URL}/api/books/upload/${bookId}`, formData, {
        headers: { authorization: localStorage.getItem("token") },
      });
    } catch (err) {
      if (
        err.response === undefined ||
        err.response === null ||
        err.response.status === 500
      )
        history.push("/500");
      else if (err.response.status === 404) {
        history.push("/404");
      }
    }
  };
  if (!loading)
    return (
      <section id="add-book-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={onSubmit}>
                <div class="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    class="form-control"
                    name="title"
                    value={form.title}
                    onChange={onChange}
                  />
                </div>
                <div class="form-group">
                  <label>Author</label>
                  <input
                    type="text"
                    class="form-control"
                    name="author"
                    value={form.author}
                    onChange={onChange}
                  />
                </div>
                <div class="form-group">
                  <label>File</label>
                  <input
                    type="text"
                    class="form-control"
                    name="file"
                    value={form.file}
                    onChange={onChange}
                  />
                </div>
                <div class="form-group">
                  <label>ISBN</label>
                  <input
                    type="text"
                    class="form-control"
                    name="isbn"
                    value={form.isbn}
                    onChange={onChange}
                  />
                </div>
                <div class="form-group">
                  <label>Year</label>
                  <input
                    type="text"
                    class="form-control"
                    name="year"
                    value={form.year}
                    onChange={onChange}
                  />
                </div>
                <div class="form-group">
                  <label>Book file</label>
                  <input
                    type="file"
                    class="form-control"
                    name="bookFile"
                    onChange={onChange}
                  />
                </div>
                <div class="form-group">
                  <label>Book thumbnail</label>
                  <input
                    type="file"
                    class="form-control"
                    name="bookThumbnail"
                    onChange={onChange}
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  else return <></>;
};

export default AddBookPage;
