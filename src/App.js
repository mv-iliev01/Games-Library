import { useState,createElement } from "react";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import GameCatalog from "./components/CatalogPage"
import CreatePage from "./components/CreatePage"

function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/home': <Homepage/>,
        '/games': <GameCatalog/>,
        '/create-game': <CreatePage/>,

    }

    const navigationChangeHandler = (path) => {
        console.log(path);
        setPage(path);
    }

    return ( <
        div id = "box" >
        <Header navigationChangeHandler = { navigationChangeHandler }/>

        <main id = "main-content" >
        { routes[page] || <h2>No Page Found!</h2> }
        </main>

        </div>
    );
}

export default App;