import React, { useEffect, useState, useRef } from "react";

const PaypalButton = ({ loading, transactionStateCallback }) => {
  const [loaded, setLoaded] = useState(false);
  let paypalRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AY5qynyvdp_wiXWXDvD9wQpIjAgAs_9jQspKJeH8Hf-W6F44ujGr3zZ1SBH1mw7NrrGQTQBmkLCBtvO8";
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
                transactionStateCallback("transaction completed");
              });
            },
          })
          .render(paypalRef);
      });
    }
  });
  if (!loading) return <div ref={(v) => (paypalRef = v)} />;
  else return <></>;
};

export default PaypalButton;
