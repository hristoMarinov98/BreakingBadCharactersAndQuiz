import React, { useState } from "react";
import "./Form.styles.css";

const Form = ({ getQuery }) => {
  const [inputText, setInputText] = useState("");
  const onChange = (query) => {
    setInputText(query);
    getQuery(query);
  };
  return (
    <div className="form-container">
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search Character"
          value={inputText}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
