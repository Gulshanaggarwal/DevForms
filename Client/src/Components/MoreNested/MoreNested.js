import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useHistory,
  useParams,
  Redirect
} from "react-router-dom";
import Integration from "../Integration/Intergration";
import Settings from "../Settings/settings";



function RedirectTo() {
  const { url} = useRouteMatch();
  const history = useHistory();

  useEffect(()=>{
    history.replace(`${url}/integration`);
  })

  return <div></div>;
}

const SelectFormById=(state,FormId)=>{

  
  if(state.Forms.list.projects.length>0){
     return state.Forms.list.projects.find((element)=>element._id===FormId)
    
  }
 
  
}


export default function MoreNested() {
  const { url, path } = useRouteMatch();
  const {FormId}=useParams();

  const FormData=useSelector((state)=>SelectFormById(state,FormId));

  const {formName}=FormData ? FormData : "" ;
  return FormData ? (
    <div>
      <h2 className="text-center text-2xl font-bold py-8">You're viewing- {formName}</h2>
      <div className="p-16 space-x-4">
        <Link
          to={`${url}/integration`}
          className="font-medium text-blue-500 text-xl"
        >
          Integration
        </Link>
        <Link
          to={`${url}/settings`}
          className="font-medium text-blue-500 text-xl"
        >
          Settings
        </Link>
      </div>
      <Switch>
        <Route path={path} exact component={RedirectTo} />
        <Route path={`${path}/integration`} exact component={Integration} />
        <Route path={`${path}/settings`} exact component={Settings} />
      </Switch>
    </div>
    
  ):(
    <Redirect to="/forms"/>
  )
}
