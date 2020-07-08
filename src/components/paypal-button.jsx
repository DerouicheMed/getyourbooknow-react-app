import React from "react";

const PaypalButton = () => {
  return (
    <>
      <h6>
        Buy for only <span className="font-weight-bold">4.97$ </span>
        using PayPal right now !
      </h6>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="6YLP8CDBSFFZL" />
        <input
          type="image"
          src="/img/paypal-buy-now.jpg"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
          style={{ width: 200 }}
        />
        <img
          alt=""
          border="0"
          src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </>
  );
};

export default PaypalButton;
