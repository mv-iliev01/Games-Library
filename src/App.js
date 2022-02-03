import { useState } from "react";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import GameCatalog from "./components/CatalogPage";
import CreatePage from "./components/CreatePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import EditPage from "./components/EditPage";

function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/Login': <LoginPage/>,
        '/Register': <RegisterPage/>,
        '/home': <Homepage/>,
        '/games': <GameCatalog/>,
        '/create-game': <CreatePage/>,
        '/edit': <EditPage/>,


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