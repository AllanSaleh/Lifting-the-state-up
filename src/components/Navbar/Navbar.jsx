import "./Navbar.css"
const Navbar = ({ games }) => {
  return (
    <div className="navbar">
      <h1>My Games!</h1>
      <h3>{games ? games.length : "0"} Games</h3>
    </div>
  )
}

export default Navbar