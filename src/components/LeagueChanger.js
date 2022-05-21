import React from "react";

const LeagueChanger = (props) => {
  return (
    <select
      onChange={(e) => {
        props.leagueChanged(e.target.value);
      }}
      className="league-choice"
    >
      <option value="1980">English premier league</option>
      <option value="2100">Serie A</option>
    </select>
  );
};

export default LeagueChanger;
