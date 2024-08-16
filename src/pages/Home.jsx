import data from '../../articles.json'
import { useState } from 'react';
import ArticleList from './ListaDeArtigos';
function Home() {
    const [query, setQuery] = useState("")
    return ( 
        <>
            <ArticleList/>
        </>
    );
}

export default Home ;