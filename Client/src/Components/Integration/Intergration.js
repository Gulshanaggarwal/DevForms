import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Integration() {
  const { FormId } = useParams();
  const userID = useSelector((state) => {
    return state.Forms.list ? state.Forms.list._id : "";
  });

  const FormURL = `https://devformms.herokuapp.com/${userID}/${FormId}`;

  const handleCopy = () => {
    let urlBox = document.querySelector(".url-box");
    let input = document.body.appendChild(document.createElement("input"));

    input.value = urlBox.innerHTML;

    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("copied");
  };

  return (
    <section className="px-16 py-8 bg-blue-300">
      <div>
        <h3 className="font-medium text-xl">Your Form's endpoint is :</h3>
        <div className="flex py-4 space-x-6">
          <div className="pl-4 pr-28 py-3 bg-gray-300 rounded-md url-box">
            {FormURL}
          </div>
          <button
            type="button"
            className="p-3 font-medium border-2 border-black rounded-md"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
      </div>
    </section>
  );
}
