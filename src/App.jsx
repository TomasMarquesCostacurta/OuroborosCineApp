import {Outlet} from "react-router-dom"
import Header from "./componentes/Header/Header"
import Footer from "./pages/Footer"
function App() {

  return (
    
    <main className="container mx-auto text-Vermeiolegal bg-FotodeFundo ">
     <Header/>
     <Outlet/>
     <Footer/>
     </main>

  )
}

export default App
