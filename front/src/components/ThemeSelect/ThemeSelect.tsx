import React from "react";

const ThemeSelect = ({ handleSelect }: any) => (
  <div>
    <select onChange={handleSelect}>
      <option value="gaming">Gaming</option>
      <option value="music">Music</option>
      <option value="cooking">Cooking</option>
      <option value="programming">Programming</option>
      <option value="miscellaneous">Miscellaneous</option>
    </select>
  </div>
);

export default ThemeSelect;
