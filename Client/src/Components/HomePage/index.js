import React from "react";
import Header from "./header";

function Homepage() {



  return (
    <div>
      <Header />
      <main>
        <div className="text-center py-12 space-y-1">
          <h2 className="text-4xl font-medium">Looking for a Form Solution ? </h2>
          <p className="pt-4">Then you are on the right place,</p>
          <p>No need to write server side programming anymore,</p>
          <p>Get your keys and integrate into your front end code</p>
        </div>

        <div className="bg-gray-900 text-gray-50 w-1/2 mx-auto py-8 px-8">
          <div className="w-5/6 mx-auto flex flex-col">
            <span>&lt;form action="https://devforms.netlify.app/" method="post"&gt;</span>
            <span className="px-4">&lt;label for="email"&gt;Your Email&lt;/label&gt;</span>
            <span className="px-4">&lt;input name="Email" id="email" type="email" /&gt;</span>
            <span className="px-4">&lt;button type="submit"&gt;Submit&lt;/button&gt;</span>
            <span>&lt;/form&gt;</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
