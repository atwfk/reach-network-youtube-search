import React, { useState } from "react";
import type { FC, ReactElement, FormEvent } from "react";
import TextInput from "../../atoms/TextInput";
import SearchBtn from "../../atoms/SearchBtn";
import { StyledSearchForm } from "./styles";
import { useNavigate } from "react-router-dom";
import { useMedia } from "../../../hooks/useMedia";
import { SCREENS } from "../../../constants";

const SearchForm: FC = (): ReactElement => {
  const [inputVal, setInputVal] = useState("");
  const [showInput, setShowInput] = useState(true);
  const matched = useMedia(`(max-width: ${SCREENS.SM})`);
  const navigate = useNavigate();

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowInput(false);
    navigate(`/search?query=${inputVal}`);
  };

  return (
    <StyledSearchForm onSubmit={submitSearch}>
      {matched ? (
        <>
          {showInput ? (
            <TextInput
              name="search"
              id="id_1"
              placeholder="Search"
              value={inputVal}
              changed={(value) => setInputVal(value)}
              deleteText={() => setInputVal("")}
            />
          ) : (
            <span
              className="input-value"
              role="button"
              tabIndex={0}
              onClick={() => setShowInput(true)}
            >
              {inputVal}
            </span>
          )}
        </>
      ) : (
        <TextInput
          name="search"
          id="id_1"
          placeholder="Search"
          value={inputVal}
          changed={(value) => setInputVal(value)}
          deleteText={() => setInputVal("")}
        />
      )}

      <SearchBtn type="submit" disabled={!inputVal} />
    </StyledSearchForm>
  );
};

export default SearchForm;
