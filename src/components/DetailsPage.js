const DetailsPage = () => {
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src="images/MineCraft.png" />
                    <h1>Bright</h1>
                    <span className="levels">MaxLevel: 4</span>
                    <p className="type">Action, Crime, Fantasy</p>
                </div>

                <p className="text">
                    Set in a world where fantasy creatures live side by side with humans. A human cop is htmlForced to work
                    with an Orc to find a weapon everyone is prepared to kill htmlFor. Set in a world where fantasy
                    creatures live side by side with humans. A human cop is htmlForced
                    to work with an Orc to find a weapon everyone is prepared to kill htmlFor.
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                        </li>
                        <li className="comment">
                        </li>
                    </ul>
                    <p className="no-comment">No comments.</p>
                </div>

                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <htmlForm className="htmlForm">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </htmlForm>
            </article>

        </section>
    )
}

export default DetailsPage;