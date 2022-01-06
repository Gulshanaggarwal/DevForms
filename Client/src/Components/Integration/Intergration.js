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
    <section>
      <div className="px-16 py-8 bg-blue-300">
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
      <div className="px-16 py-8 w-5/6">
        <h3 className="text-xl font-medium py-8">Integration Guide</h3>
        <div className="bg-gray-900 text-gray-50  py-8 text-sm  rounded-md">
          <div className="w-full mx-auto flex flex-col px-4">
            <span>&lt;form action=<span className="text-green-300 font-medium">{`"${FormURL}"`}</span> method="post"&gt;</span>
            <span className="px-4">&lt;label for="name"&gt;Your Name&lt;/label&gt;</span>
            <span className="px-4">&lt;input name="name" id="name" type="text" /&gt;</span>
            <span className="px-4">&lt;button type="submit"&gt;Submit&lt;/button&gt;</span>
            <span>&lt;/form&gt;</span>
          </div>
        </div>
        <div className="py-4 space-y-3">
          <div>
            <span className="text-xl font-medium text-blue-500">Step 1:</span>
            <span className="px-4">You need to copy Form's endpoint from the endpoint section.</span>
          </div>
          <div>
            <span className="text-xl font-medium text-blue-500">Step 2:</span>
            <span className="px-4">Paste the endpoint into front end code like mentioned above.</span>
          </div>
          <div>
            <span className="text-xl font-medium text-blue-500">Step 3:</span>
            <span className="px-4">Relax, when someone submits the form on your website we will handle automatically.</span>
          </div>
        </div>
        <p className="py-4 tetx-xl"><span className="text-red-500 font-medium">Note:</span> You can set form fields according to your requirements, not limited to demo form. </p>
      </div>
    </section>
  );
}
