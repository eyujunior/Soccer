import React from "react";
import Header from "./Table/Header";
import LeagueChanger from "./LeagueChanger";
import "./Leagues.css";
import Tabs from "./Tabs";
import Tbody from "./Table/Tbody";
const Leagues = ({
  leagueChanged,
  categoryChanged,
  category,
  league,
  standing,
  scorers,
  matches,
}) => {
  return (
    <div className="bg-cover bg-hero">
      <div className="relative z-10 h-auto min-h-screen py-4 text-white layout">
        <div className="hero league">
          <h2 className="league-heading">
            {+league === 1980 ? "English Premier League" : "Serie a"}
          </h2>
          <LeagueChanger leagueChanged={leagueChanged} />

          <Tabs categoryChanged={categoryChanged} category={category} />
          <table className="table">
            <thead className="text-black thead">
              <Header category={category} />
            </thead>
            <Tbody
              standing={standing}
              scorers={scorers}
              matches={matches}
              category={category}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leagues;
