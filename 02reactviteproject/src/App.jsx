
import Chai from "./chai"

function App() {

  const username = "Abdul Azeem"
  return (
    //we can export only one element in return 
    // to solve this prblm we can use div element and can put/wrapped multiple element in single div
    // or we can use empty <>....</>(fragment) 
    

    //in react to print variable value we put in curly braces{username  }
    <>
    <Chai/>
    <h1>chai aur react |  {username} | react with vite</h1>
    <p>hello</p>
    </>
  )
}

export default App
