import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Howto from "./components/Howto";
import Navbar from "./components/Navbar";
import Leagues from "./components/Leagues";

function App() {
  const setDate = () => {
    let endDate = new Date();
    let startDate = new Date();
    startDate.setDate(endDate.getDate() - 10);
    startDate = `${startDate.getFullYear()}-${
      startDate.getMonth() + 1
    }-${startDate.getDate()}`;
    endDate = `${endDate.getFullYear()}-${
      endDate.getMonth() + 1
    }-${endDate.getDate()}`;
    setFromDate(startDate);
    setUntilDate(endDate);
  };

  const [standing, setStanding] = useState([]);
  const [scorers, setScorers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [untilDate, setUntilDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [selectedLeague, setSelectedLeague] = useState(3307);
  const [selectedCategory, setSelectedCategory] = useState("standing");
  const myAPI = "18a02c00-4aef-11ed-a893-3f4d34e1cd99";

  const standingApi = `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=${myAPI}&season_id=${selectedLeague}`;
  const scorerApi = `https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=${myAPI}&season_id=${selectedLeague}`;
  const matchesApi = `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${myAPI}&season_id=${selectedLeague}&date_from=${fromDate}&date_to=${untilDate}`;

  const leagueChanged = (newLeague) => {
    setSelectedLeague(newLeague);
  };
  const categoryChanged = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const fetchStanding = async () => {
    const response = await fetch(standingApi);

    const data = await response.json();

    setStanding(data.data.standings);
  };

  const fetchScorers = async () => {
    const response = await fetch(scorerApi);

    const data = await response.json();

    setScorers(data.data.slice(0, 10));
  };
  const fetchMatches = async () => {
    const response = await fetch(matchesApi);

    const data = await response.json();

    setMatches(data.data);
  };

  useEffect(() => {
    setDate();
  }, []);

  useEffect(() => {
    setDate();
    if (selectedCategory === "standing") {
      fetchStanding();
    } else if (selectedCategory === "scorers") {
      fetchScorers();
    } else {
      fetchMatches();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLeague, selectedCategory]);

  return (
    <div className="font-sans">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero /> <Howto />
              </>
            }
          />
          <Route
            path="/leagues"
            element={
              <Leagues
                categoryChanged={categoryChanged}
                leagueChanged={leagueChanged}
                league={selectedLeague}
                category={selectedCategory}
                standing={standing}
                scorers={scorers}
                matches={matches}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
