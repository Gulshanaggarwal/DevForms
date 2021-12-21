import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ChangeFormName from "./ChangeFormName";
import ChangeTargetEmail from "./ChangeTargetEmail";
import ChangeEnable from "./ChangeEnable";
import DeleteForm from "./DeleteForm";
import Notification from "../Notification/Notification";
import DelProjectDialog from "../Dialog/DelProjectDialog";

const SelectByID = (state, FormId) => {
  return state.Forms.list.projects.find((ele) => ele._id===FormId);
};

export default function Settings() {
  const { FormId } = useParams();
  const { formName, targetEmail, isEnabled } = useSelector((state) =>
    SelectByID(state, FormId)
  );
  return (
    <section className="px-16">
      <h2 className="font-medium text-2xl py-4">General</h2>
      <hr />
      <ChangeFormName formName={formName} FormId={FormId} />
      <ChangeTargetEmail targetEmail={targetEmail} FormId={FormId} />
      <ChangeEnable isEnabled={isEnabled} FormId={FormId} />
      <DeleteForm />
      <Notification />
      {<DelProjectDialog FormId={FormId} />}
    </section>
  );
}
