import React from "react";
// import { ApolloClient } from "@apollo/client";

const Result = ({ userSuggestions, value, valueInsensibleCase }: any) => (
  <div>
    {value !== "" && (
      <datalist id="users">
        {userSuggestions
          .filter((userSuggestion: any) =>
            userSuggestion.match(valueInsensibleCase)
          )
          .map((userSuggestion: any, index: number) => (
            <option value={userSuggestion} key={index}>
              {userSuggestion}
            </option>
          ))}
      </datalist>
    )}
  </div>
);

export default Result;
