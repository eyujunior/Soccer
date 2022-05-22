import { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Howto from './components/Howto'
import Navbar from './components/Navbar'
import Leagues from './components/Leagues'

function App() {
  const setDate = () => {
    let endDate = new Date()
    let startDate = new Date()
    startDate.setDate(endDate.getDate() - 10)
    startDate = `${startDate.getFullYear()}-${
      startDate.getMonth() + 1
    }-${startDate.getDate()}`
    endDate = `${endDate.getFullYear()}-${
      endDate.getMonth() + 1
    }-${endDate.getDate()}`
    setFromDate(startDate)
    setUntilDate(endDate)
  }

  const [standing, setStanding] = useState([])
  const [scorers, setScorers] = useState([])
  const [matches, setMatches] = useState([])
  const [untilDate, setUntilDate] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [selectedLeague, setSelectedLeague] = useState(1980)
  const [selectedCategory, setSelectedCategory] = useState('standing')

  const standingApi = `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=97411aa0-c330-11eb-aae1-e138b8cb4f06&season_id=${selectedLeague}`
  const scorerApi = `https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=97411aa0-c330-11eb-aae1-e138b8cb4f06&season_id=${selectedLeague}`
  const matchesApi = `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=97411aa0-c330-11eb-aae1-e138b8cb4f06&season_id=${selectedLeague}&date_from=${fromDate}&date_to=${untilDate}`

  const leagueChanged = (newLeague) => {
    setSelectedLeague(newLeague)
  }
  const categoryChanged = (newCategory) => {
    setSelectedCategory(newCategory)
  }

  const fetchStanding = async () => {
    const response = await fetch(standingApi)

    const data = await response.json()

    setStanding(data.data.standings)
  }

  const fetchScorers = async () => {
    const response = await fetch(scorerApi)

    const data = await response.json()

    setScorers(data.data.slice(0, 10))
  }
  const fetchMatches = async () => {
    const response = await fetch(matchesApi)

    const data = await response.json()

    setMatches(data.data)
  }

  useEffect(() => {
    setDate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setDate()
    fetchStanding()
    fetchScorers()
    fetchMatches()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLeague, selectedCategory])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero /> <Howto />
            </>
          }
        />
        <Route
          path='/leagues'
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
  )
}

export default App
