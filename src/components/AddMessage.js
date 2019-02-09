import React from "react";
import PropTypes from "prop-types";

const AddMessage = props => {
  let input;
  return (
    <section id="new-message">
      <input
        placeholder="Write a message"
        onKeyPress={e => {
          if (e.key === "Enter" && input.value.trim()) {
            props.dispatch(input.value, "Me");
            input.value = "";
          }
        }}
        type="text"
        ref={node => {
          input = node;
        }}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default AddMessage;
