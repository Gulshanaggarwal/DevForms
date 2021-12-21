import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";



export default function useAuth(){

  const [user,setUser]=useState();
    
    const history=useHistory();
    useEffect(() => {
        const token = localStorage.getItem("__auth__token");
    
        if (token) {
          // send token for server auth.
    
          fetch("https://devformms.herokuapp.com/verify-token", {
            headers: {
              "x-access-token": token,
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              if (!data.user) {
                history.replace("/login");
              }
              else{
                setUser(data.user);
              }
            })
            .catch((err) => history.replace("/login"));
        } else {
          history.replace("/login");
        }
      },[]);

      return user;

}