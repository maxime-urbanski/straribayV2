import React from "react";

const Result = ({ userSuggestions, value, valueInsensibleCase }: any) => (
  <div>
    {value !== "" && (
      <datalist id="users">
        {userSuggestions
          .filter((userSuggestion: any) => userSuggestion.match(valueInsensibleCase))
          .map((userSuggestion: any, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <option value={userSuggestion} key={index}>
              {userSuggestion}
            </option>
          ))}
      </datalist>
    )}
  </div>
);

export default Result;