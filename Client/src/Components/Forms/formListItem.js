import React from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";

const selectFormByID = (state, ItemId) => {
  return state.Forms.list.projects.filter((ListItem) => ListItem._id===ItemId);
};

export default function FormListItem({ id }) {
  const [Formm] = useSelector((state) => selectFormByID(state, id));

  const { formName, totalSubmissions, isEnabled } = Formm;

  const { path } = useRouteMatch();

  return (
    <tr className="bg-gray-300 rounded-md border-b-8 border-gray-200">
      <td className="text-xl p-4 text-blue-500 font-thin text-justify">
        <Link to={`${path}/${id}/integration`} className="underline">
          {formName}
        </Link>
      </td>
      <td className="p-4">{totalSubmissions}</td>
      {isEnabled ? <td className="p-4 font-medium text-green-700">Active</td> : <td className="p-4 font-medium text-red-700">Disabled</td>}
    </tr>
  );
}
