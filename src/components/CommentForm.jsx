import React, { useEffect, useRef, useState } from "react";
import { submitComment } from "../../services";

export default function CommentForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handleCommentSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }
    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
        }
        formData.comment = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <div>
      <h3 className="text-white text-2xl font-semibold text-start mb-4">
        Leave a Reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          value={formData.comment}
          onChange={onInputChange}
          className="outline-none p-4 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-white/20 "
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={formData.name}
          onChange={onInputChange}
          placeholder="Name"
          name="name"
          className="outline-none py-2 px-4 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-white/20 "
        />
        <input
          type="text"
          value={formData.email}
          onChange={onInputChange}
          placeholder="Email"
          name="email"
          className="outline-none py-2 px-4 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-white/20 "
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <div className="text-start flex items-start gap-x-2">
          <input
            checked={formData.storeData}
            onChange={onInputChange}
            id="storeData"
            name="storeData"
            value={true}
            type="checkbox"
          />
          <label
            className="text-gray-500 cursor-pointer -mt-2"
            htmlFor="storeData"
          >
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p>}
      <div className="mt-8 text-start">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block cursor-pointer bg-indigo-600 text-lg rounded-full text-white px-8 py-3"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
}
