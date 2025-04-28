import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Card from "./components/card"

function App() {

  return (
    // <></> :wrapper

    <>  
      <Navbar/>   {/*Navbar component*/}
      <div className="cards">
      <Card title="card1" description="card 1 desc"/>    
      <Card title="card2" description="card 2 desc"/>
      <Card title="card3" description="card 3 desc"/>
      <Card title="card4" description="card 4 desc"/>
      </div>
      <Footer/>
    </>
  )
}

export default App

//App.jsx is the entry point for the project all the components and data are passed here.
