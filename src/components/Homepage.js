const Homepage = ({
    navigationChangeHandler,
    }) => {
        const onMainClick = (e) => {
            e.preventDefault();
    
            if (e.target.tagName == 'A') {
                let url = new URL(e.target.href);
                navigationChangeHandler(url.pathname);
            }
        };

    return (
        <section onClick={onMainClick} id="welcome-world">
                <div className="welcome-message">
                    <h2>You will find All New Games</h2>
                    <h3>Only in GamesPlay</h3>
                </div>
                <img src="./images/acreed-icon2.png" alt="hero" />

                <div id="home-page">
                    <h1>Latest Games</h1>

                    <div className="game">
                        <div className="image-wrap">
                            <img src="./images/CoverFire.png" />
                        </div>
                        <h3>Cover Fire</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <a href="/gameone" className="btn details-btn">Details</a>
                        </div>
                    </div>
                    <div className="game">
                        <div className="image-wrap">
                            <img src="./images/ZombieLang.png" />
                        </div>
                        <h3>Zombie Lang</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <a href="/gametwo" className="btn details-btn">Details</a>
                        </div>
                    </div>
                    <div className="game">
                        <div className="image-wrap">
                            <img src="./images/MineCraft.png" />
                        </div>
                        <h3>MineCraft</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <a href="/gamethree" className="btn details-btn">Details</a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Homepage;