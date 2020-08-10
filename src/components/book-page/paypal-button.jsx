import React, { useEffect, useState, useRef } from "react";

const PaypalButton = ({ loading }) => {
  const [loaded, setLoaded] = useState(false);
  let paypalRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AXCw6gEiIMj6cRkrlj75BW7A3R5d94M3eggfXDRJ_S6dakW8TdbVIHlD0PoJz2QZr03r6F0ZCl1Sp8Ot";
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);

    if (loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            createOrder: function (data, actions) {
              // This function sets up the details of the transaction, including the amount and line item details.
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: "4.97",
                    },
                  },
                ],
              });
            },
            onApprove: function (data, actions) {
              // This function captures the funds from the transaction.
              return actions.order.capture().then(function (details) {
                // This function shows a transaction success message to your buyer.
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );
              });
            },
          })
          .render(paypalRef);
      }, 1000);
    }
  });
  if (!loading) return <div ref={(v) => (paypalRef = v)} />;
  else return <></>;
};

export default PaypalButton;
