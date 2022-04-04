import { useState } from "react";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import GameCatalog from "./components/GameCatalog/CatalogPage";
import CreatePage from "./components/CreatePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import EditPage from "./components/EditPage";
import DetailsPage from "./components/DetailsPage";

function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/Login': <LoginPage/>,
        '/Register': <RegisterPage/>,
        '/home': <Homepage/>,
        '/games': <GameCatalog/>,
        '/create-game': <CreatePage/>,
        '/edit': <EditPage/>,
        '/gameone': <DetailsPage/>


    }

    const navigationChangeHandler = (path) => {
        setPage(path);
        console.log(path);
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