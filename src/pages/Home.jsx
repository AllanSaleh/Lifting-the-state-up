import GameList from "../components/GameList"
import Navbar from "../components/Navbar/Navbar"
import { useState } from "react"

const Home = () => {

  const [games, setGames] = useState([]) //arrays should have a default value of an empty array

  return (
    <>
      <Navbar games={games} />
      <GameList games={games} setGames={setGames} />
    </>
  )
}

export default Home