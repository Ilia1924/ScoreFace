import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function FreeSoloCreateOptionDialog({ data , setSearchValue}) {
  const [value, setValue] = React.useState(
    data.length > 0 ? data[0].strLeague : ""
  );

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          event.preventDefault();
          setValue(newValue ? newValue.strLeague : "");
          setSearchValue(newValue ? newValue.strLeague : "");
        }}
        id="search_league"
        options={data}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.strLeague;
        }}
        selectOnFocus
        clearOnBlur
        renderOption={(props, option) => (
          <li {...props}>
            {option.strLeague}
          </li>
        )}
        sx={{ width: 400 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Let's find game" />
        )}
      />
    </React.Fragment>
  );
}
