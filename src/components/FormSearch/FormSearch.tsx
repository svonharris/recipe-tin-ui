import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import { Search01 } from "../../icons";

type FormSearchProps = {
  onSubmit: (query: string) => void;
  placeholder?: string;
  label?: string;
  hideLabel?: boolean;
};

const FormSearch = ({
  onSubmit,
  placeholder = "Search",
  label = "Search",
  hideLabel = true,
}: FormSearchProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query.trim());
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <FormInput
        id="search"
        label={label}
        value={query}
        type="search"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        hideLabel={hideLabel}
        icon={<Search01 />}
      />
    </form>
  );
};

export default FormSearch;
