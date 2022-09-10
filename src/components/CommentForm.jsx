import React from "react";
import { useState } from "react";

const CommentForm = ({
  submitLabel,
  handleSubmit,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
}) => {
  const [text, setText] = useState(initialText);
  const isTexareaDisabled = text.length === 0;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form className="flex flex-col items-center" onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTexareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
