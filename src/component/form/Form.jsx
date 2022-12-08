import React from "react";
import "../../App.css";

const Form = ({ type, action, submitName }) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          action(e);
        }}
      >
        {type == "update" && (
          <input
            type="number"
            className="inp"
            name="id"
            placeholder="ENTER ID"
          />
        )}
        <input
          type="text"
          className="inp"
          name="name"
          placeholder="ENTER NAME"
        />
        <input
          type="number"
          className="inp"
          name="phone"
          placeholder="ENTER PHONE"
        />
        <input
          type="email"
          className="inp"
          name="email"
          placeholder="ENTER EMAIL"
        />
        <input
          type="text"
          className="inp"
          name="address"
          placeholder="ENTER ADDRES"
        />
        <button type="submit">{submitName}</button>
      </form>
    </>
  );
};

export default Form;
