import React from "react";
import Header from "./header";

function Homepage() {



  return (
    <div>
      <Header />
      <main className="py-16">
        <div className="text-center py-12 space-y-1">
          <h2 className="text-2xl font-medium sm:text-4xl">Looking for a Form Solution ? </h2>
          <p className="py-4 text-xl">Then you are on the right place,</p>
          <p className="text-xl">No need to write server side programming anymore 😎</p>
        </div>

        <div className="bg-gray-900 text-gray-50 w-5/6 py-4 px-4 mx-auto sm:py-8 sm:px-8 rounded-md sm:w-1/2">
          <div className="w-5/6 mx-auto flex flex-col">
            <span>&lt;form action=<span className="text-green-300 font-medium">"https://devformms.herokuapp.com/endpoint"</span> method="post"&gt;</span>
            <span className="px-4">&lt;label for="name"&gt;Your Name&lt;/label&gt;</span>
            <span className="px-4">&lt;input name="name" id="name" type="text" /&gt;</span>
            <span className="px-4">&lt;button type="submit"&gt;Submit&lt;/button&gt;</span>
            <span>&lt;/form&gt;</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
