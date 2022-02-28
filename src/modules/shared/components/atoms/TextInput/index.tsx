import React from "react";
import type { FC, ReactElement } from "react";
import { AiOutlineClose } from "react-icons/ai";
import type { ITextInput } from "./ITextInput";
import { StyledInputContainer } from "./styles";

const TextInput: FC<ITextInput.IProps> = ({
  name,
  id,
  placeholder,
  value,
  changed,
  deleteText
}): ReactElement => {
  return (
    <StyledInputContainer>
      <input
        type="text"
        data-testid="text-input"
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => changed(e.currentTarget.value)}
      />
      {value && (
        <button type="button" onClick={deleteText} data-testid="delete-btn">
          <AiOutlineClose className="remove-text" />
        </button>
      )}
    </StyledInputContainer>
  );
};

export default TextInput;
