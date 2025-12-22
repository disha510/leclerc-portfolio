function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow">
      <ul className="flex gap-6 p-4">
        <li><a href="#home">Home</a></li>
        <li><a href="#career">Career</a></li>
        <li><a href="#stats">Stats</a></li>
        <li><a href="#media">Media</a></li>
        <li><a href="#fan">Fan Zone</a></li>
      </ul>
    </nav>
  )
}
export default Navbar
