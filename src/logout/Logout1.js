import React from 'react';
import "./Logout.css";
import lout from "../images/lout.png";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";

const Logout1 = (props) => {
    const history = useHistory();
  const [{ userInfo }, dispatch] = useStateValue();
    return (
        <div><div className="row justify-content-center"><img className="lin" src={lout} ></img></div>
            <h1>Are you sure to log out?</h1>
            <Button
            variant="contained"
              color="primary"
              disabled={props.isSubmitting}
              onClick={props.submitForm}
              className="logout__btn">
                Yes
            </Button>
    
            <Button
            variant="contained"
              color="primary"
              disabled={props.isSubmitting}
              onClick={props.submitForm}
              className="logout__btn">
                No
            </Button>
            
        </div>
    )
}

export default Logout1;
