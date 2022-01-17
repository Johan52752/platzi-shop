import React from "react";
import "./SendEmail.css";
import logo from "../../assets/logos/logo_yard_sale.svg"

const SendEmail = () => {
  return (
    <div class="login">
      <div class="form-container">
        <img class="logo" src={logo} alt="" />
        <h1 class="tittle">Password recovery</h1>
        <p class="description">
          Inform the email address used to create your account
        </p>
        <form class="form" action="">
          <label class="label-input" for="email">
            Email address
          </label>
          <input
            id="email"
            class="input input-password"
            type="email"
            placeholder="yo@example.com"
          />
          <input type="submit" class="button-form" value="Submit" />
          <a href="">Back to log in</a>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
