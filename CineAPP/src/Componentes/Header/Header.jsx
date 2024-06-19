import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex  justify-between bg-violet-950 text-white" >
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao OuroborosApp</h1>
            <Navbar></Navbar>
        </header>
     );
}

export default Header;