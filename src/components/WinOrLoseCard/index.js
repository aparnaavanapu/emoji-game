import './index.css'

const WinOrLose =(props)=>{
    const {score,isWon,resetGame}=props
    const handleResetBtn=()=>{
        resetGame();
    }
    
    if(isWon){
        return(
            <li className="card-container">
                <div className="img-container">
                <img src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" className="win-or-lose-img" alt="won-game"/>
                </div>
                <div className="text-container">
                <h1 className="win-or-lose">You Won</h1>
                <p className="score-text">Best Score</p>
                <p className="score-nbr">12/12</p>
                <button className="play-again-btn" onClick={handleResetBtn}>Play Again</button>
                </div>
            </li>
        )
    }
    else{
        
        return(
            <li className="card-container">
            <div className="img-container">
            <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" alt="lose-game" className="win-or-lose-img" />
            </div>
            <div className="text-container">
                <h1 className="win-or-lose">You Lose</h1>
                <p className="score-text">Score</p>
                <p className="score-nbr">{score}/12</p>
                <button className="play-again-btn" onClick={handleResetBtn}>Play Again</button>
            </div>
        </li>
        )
    }
}

export default WinOrLose