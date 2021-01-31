import React from 'react';
import PPL from "../images/ppl.png";

const PayPal = () => {
    return (
        <div><div className="row justify-content-center"><div className="header__title header__nav"><a href="https://www.paypal.com"><img src={PPL} ></img></a></div></div>
            <div className="header__title header__nav"><a href="https://www.paypal.com">Click and Go to PayPal to Send Money</a></div>
        </div>
    )
}

export default PayPal;
