import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import Career from "./sections/Career"
import Stats from "./sections/Stats"
import Media from "./sections/Media"
import FanZone from "./sections/FanZone"
import Timeline from "./sections/Timeline"
function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Timeline />
      <Career />
      <Stats />
      <Media />
      <FanZone />
    </div>
  )
}

export default App
