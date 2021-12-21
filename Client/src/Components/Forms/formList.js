import React, { useEffect } from "react";
import FormListItem from "./formListItem";
import { useDispatch, useSelector } from "react-redux";
import { ModifyList } from "../../features/FormSlice";

const selectFormList = (state) => {

  if (state.Forms.list.projects.length > 0) {
    const tempArray = state.Forms.list.projects.slice().reverse();

    return tempArray.map((ele) => ele._id);
  } else {
    return null;
  }
};

export default function FormList({ user }) {
  const list = useSelector((state) => selectFormList(state));
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://devformms.herokuapp.com/send-initialData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          if (data.result) {
            dispatch(ModifyList(data.result));
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  let renderedListItem;
  if (list) {
    renderedListItem = list.map((ele) => {
      return <FormListItem key={ele} id={ele} />;
    });
  }

  return (
    <section>
      {list ? (
        <table className="table-fixed mx-auto">
          <thead>
            <tr>
              <th className="px-8 py-4 text-xl">Form</th>
              <th className="px-8 py-4 text-xl">Total Submissions</th>
              <th className="px-8 py-4 text-xl">Status</th>
            </tr>
          </thead>
          <tbody className="bg-green-500 text-center">{renderedListItem}</tbody>
        </table>
      ) : (
        <h3 className="py-4 text-gray-600 text-center">Oops! No Form Found</h3>
      )}
    </section>
  );
}
