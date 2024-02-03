import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="m-2 bg-gray-200 rounded-lg px-5 py-2">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
