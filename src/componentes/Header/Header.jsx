import Navbar from "../Navbar/Navbar";
import data from '../../../articles.json';
function Header() {
    return ( 
        <header className="flex justify-around text-OutroVermeio bg-headercolor py-3.5">
            {
                data.map((post, index) => {
                    <div key={index}>
                      <p>{post.title}</p>
                      <p>{post.author}</p>
                    </div>
            })}
            <img className="w-10" src="Group 6.png" alt="booom"/>
            
            <Navbar></Navbar>
        </header>
     );
}

export default Header ;