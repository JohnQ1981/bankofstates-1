import React from "react";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import AccountInfo from "../account/AccountInfo";
import Sm from "../account/Sm";
import "react-toastify/dist/ReactToastify.css";
import "./SendMoney.css";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/typographyStyle.js";


const useStyles = makeStyles(styles);





const SendMoney = () => {
  const [{ userInfo }, dispatch] = useStateValue();
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      {!userInfo && history.push("/login")}
      {userInfo && userInfo.user && (
        <div>
          <fieldset><AccountInfo /></fieldset>
          
        
          
          <h1 className={classes.infoText}>Send Money</h1>
          <fieldset><Sm /></fieldset>
        </div>
      )}
    </div>
  );
};

export default SendMoney;