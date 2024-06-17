import AddTask from "./AddTask"
import GetTask from "./GetTask"
import Navbar from "./Navbar"
function App() {
  

  return (
    <>
      <Navbar/>
      <div className="flex border-2 rounded-xl p-3">
        <AddTask/>
        <GetTask/>
      </div>
    </>
  )
}

export default App
