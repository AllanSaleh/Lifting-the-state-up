import { useState } from "react"

const GameList = (props) => {

    const [game, setGame] = useState(""); //state variable set up to collect value from form

    const handleSubmit = event => {
        event.preventDefault();
        const gameObj = {
            title: game, //titile collected from the user
            isPlayed: false //boolean default false
        }
        props.setGames([...props.games, gameObj]);
        setGame("");
    }

    const handleRemove = gameName => {
        const newGames = props.games.filter(gameSelected => gameSelected.title != gameName);
        props.setGames(newGames)
    }

    const handleToggle = idx => {
        const newGames = props.games.map((gameObj, GameIdx) => {
            if (idx === GameIdx) {
                return { ...gameObj, isPlayed: !gameObj.isPlayed };
            }
            return gameObj;
        });
        props.setGames(newGames);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Game Title"
                    onChange={(event) => setGame(event.target.value)}
                    value={game}
                />
                <button type="submit">Submit</button>
            </form>
            <h3>My Games List</h3>
            <ul>
                {
                    props.games.map((game, idx) => (
                        <div key={idx} style={{ backgroundColor: game.isPlayed ? "green" : "transparent" }}>
                            <li >{game.title}</li>
                            <button onClick={() => handleToggle(idx)} >{game.isPlayed ? "Played" : "Uncheck"}</button>
                            <button onClick={() => handleRemove(game.title)} >Remove</button>
                        </div>
                    ))
                }
            </ul>
        </>
    )
}

export default GameList