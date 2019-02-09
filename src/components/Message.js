import React from "react";
import PropTypes from "prop-types";

const Message = ({ message, author }) => (
  <div className={"bubble " + (author === "Me" ? "me" : "other")}>
    <div className={"bubble-in " + (author === "Me" ? "me-in" : "other-in")}>
      <div>
        {author !== "Me" ? (
          <strong className="author-name">
            {author}
            <br />
          </strong>
        ) : null}
        {message}
      </div>
    </div>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Message;
