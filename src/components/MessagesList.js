import React from "react";
import PropTypes from "prop-types";
import Message from "./Message.js";

const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul>
      {messages.map(msg => (
        <Message key={msg.id} {...msg} />
      ))}
    </ul>
  </section>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessagesList;
