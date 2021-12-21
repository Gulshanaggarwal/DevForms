import React from "react";
import { Switch, Route, useRouteMatch} from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader/loading";
import useAuth from "../../Hooks/useAuth";
import CreateForm from "./createform";
import CreateFormWindow from "./createFormWindow";
import CommonHeader from "../CommonHeader/commonHeader";
import FormList from "./formList";
import Notification from "../Notification/Notification";
import MoreNested from "../MoreNested/MoreNested";

export default function Forms() {
  const user = useAuth();

  const IsCreateForm = useSelector(
    (state) => state.CreateFormWindow.IsCreateFormWindowAppear
  );
  
  const status = useSelector((state) => state.Forms.IsLoading);
  const IsNotification = useSelector((state) => state.Notification.Notify);

  const {path } = useRouteMatch();

  return (
    <div>
      <CommonHeader />
      <Switch>
        <Route path={`${path}`} exact>
          <CreateForm />
          {user && <FormList user={user} />}
          {IsCreateForm && <CreateFormWindow user={user} />}
          {status && <Loader />}
          {IsNotification && <Notification />}
        </Route>
        <Route path={`${path}/:FormId`}>
           <MoreNested/>
        </Route>
      </Switch>
    </div>
  );
}
