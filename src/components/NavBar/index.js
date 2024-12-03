import './index.css'


const NavBar =(props)=>{
    const {score,isGameOver,topScore}=props
    if(isGameOver){
        return(
            <nav className="nav-bar">
            <div className="logo-container">
            <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="logo"/>
            <p className="game-name">Emoji Game</p>
            </div>
            
        </nav>
        )
    }
    else{
        return(
            <nav className="nav-bar">
            <div className="logo-container">
            <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="logo"/>
            <p className="game-name">Emoji Game</p>
            </div>
            <div className="score-container">
                <p className="game-score">Score:{score}</p>
                <p className="game-score">Top Score: {topScore}</p>
            </div>
            
        </nav>
        )
    }
}

export default NavBar