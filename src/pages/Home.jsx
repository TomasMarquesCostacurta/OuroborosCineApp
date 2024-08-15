import data from '../../articles.json'
import { useState } from 'react';
function Home() {
    const [query, setQuery] = useState("")
    return ( 
        <>
            
            <div className='grid grid-cols-3 gap-4'>
            { 
                
                data.map( (artigo, index) => (
                    <div className='card' key={index}>
                        <h2>{artigo.title}</h2>
                        <img className="mb-2" src={artigo.image} alt={artigo.title} />
                        <div className='tags'>
                            {artigo.tags.map( (tag, index) => (
                                <span className="bg-purple-600 p-1 m-1" key={index}>{tag}</span>
                            ))}
                        </div>
                        <div className='texto'>
                        {artigo.text.map( (paragrafo,index) => (
                            <p key={index}>{paragrafo}</p>
                        ))}
                        </div>

                    </div>
                ))
            }
            </div>
        </>
    );
}

export default Home ;