import Landing from "./Landing"
import Test from "./Test"
import { useState } from "react"

function App() {
const [started, setstarted] = useState(false)

  return (
     <>
      {started ? (
        <Test />
      ) : (
       <Landing onStart={() =>setstarted(true)} />
      )}
    </>
  )
  
}

export default App 