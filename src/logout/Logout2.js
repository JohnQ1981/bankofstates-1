import React from 'react';
import { Button } from "@material-ui/core";
import lout from "../images/lout.png";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import "./Logout2.css";


const Logout2 = () => {
    const [{ userInfo }, dispatch] = useStateValue();
    const history = useHistory();
    const handleYes=()=>{
        localStorage.clear("auth");
        dispatch({
            type: "LOGOUT",
            item: null,
          });
          history.push("/");

    };
    const handleNo=()=>{
        history.goBack();
        
    };
    return (
        <div>
        <fieldset><div className="row justify-content-center"><img className="lin" src={lout} ></img></div>
            <h1>Are You Sure to Logout?</h1>
            <Button variant="contained" color="primary" className="button"
            onClick={handleYes}
            >Yes</Button>
            <Button variant="contained" color="secondary" className="button"
            onClick={handleNo}
            >No</Button>
            </fieldset>
        </div>
    )
}

export default Logout2;
