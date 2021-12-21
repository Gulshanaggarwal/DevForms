import React from "react";
import { useSelector } from "react-redux";

import CommonHeader from "../CommonHeader/commonHeader";
import DataField from "./dataFields";
import Notification from "../Notification/Notification";

export default function Account() {
  const IsNotification = useSelector((state) => state.Notification.Notify);

  return (
    <div>
      <CommonHeader />
      <DataField />
      {IsNotification && <Notification />}
    </div>
  );
}
