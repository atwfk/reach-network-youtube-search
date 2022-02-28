import React, { useState } from "react";
import type { FC, ReactElement, FormEvent } from "react";
import TextInput from "../../atoms/TextInput";
import SearchBtn from "../../atoms/SearchBtn";
import { StyledSearchForm } from "./styles";
import { useNavigate } from "react-router-dom";

const SearchForm: FC = (): ReactElement => {
  const [inputVal, setInputVal] = useState("");
  const [showInput] = useState(true);
  const navigate = useNavigate();

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${inputVal}`);
  };

  return (
    <StyledSearchForm onSubmit={submitSearch}>
      {showInput && (
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
