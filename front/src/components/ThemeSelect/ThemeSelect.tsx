import React from "react";

const ThemeSelect = ({ handleSelect }: any) => (
  <div>
    <select onChange={handleSelect}>
      <option value="gaming">Gaming</option>
      <option value="cooking">Cooking</option>
      <option value="programming">Programming</option>
    </select>
  </div>
);

export default ThemeSelect;
