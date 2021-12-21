import React from "react";
import { useDispatch } from "react-redux";
import { DelDialogOpen } from "../../features/DelDialogSlice";

export default function DeleteForm() {

  const dispatch=useDispatch();

  return (
    <div>
      <h2 className="py-4 text-2xl font-medium">Risk Zone</h2>
      <hr />
      <div className="flex items-center">
        <div className="py-4 w-1/2">
          <h2 className="text-xl font-medium">Delete Form</h2>
          <p className="text-gray-600">
            Deleting the form won't allow you to perform any type of submissions
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 cursor-pointer"
          viewBox="0 0 20 20"
          fill="red"
          onClick={()=>dispatch(DelDialogOpen())}
          
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
