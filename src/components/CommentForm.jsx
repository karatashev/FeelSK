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
        className="w-[80%] h-[80%] mb-2 mt-2 border border-solid border-[#6b720c]"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex flex-row justify-center">
      <button className="text-[16px] py-3 px-8 bg-[#3b82f6] rounded-lg text-white hover:cursor-pointer hover:enabled:bg-[#2563eb] disabled:opacity-70 disabled:cursor-default" disabled={isTexareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="text-[16px] py-2 px-4 bg-[#3b82f6] rounded-lg text-white hover:cursor-pointer hover:enabled:bg-[#2563eb] ml-3"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
      </div>
    </form>
  );
};

export default CommentForm;
