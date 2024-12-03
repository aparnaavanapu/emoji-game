import { Component } from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinOrLose from '../WinOrLoseCard'

class EmojiGame extends Component{

    state={
        emojisList:this.props.emojisList,
        clickedEmojisList:[],
        score:0,
        topScore:0,
        isWon:false,
        isGameOver:false
        
    }

      shuffledEmojisList = () => {
        const {emojisList} = this.props
        return emojisList.sort(() => Math.random() - 0.5)
      }
      onClickEmoji = id => {

        const { clickedEmojisList,emojisList } = this.state
        const isDuplicate = clickedEmojisList.includes(id)
        
        if(!isDuplicate){
            const shuffledList = this.shuffledEmojisList()
        
            if(clickedEmojisList.length+1===emojisList.length){
                this.setState({isWon:true,
                    isGameOver:true
                })
            }
            else{
                this.setState(prevState=>({
                    emojisList:shuffledList,
                    clickedEmojisList:[...prevState.clickedEmojisList,id],
                    score:prevState.score+1,
                    isWon:false,
                    
                })) 
            }
        }
        else{
            this.setState({
                clickedEmojisList:[],
                isWon:false,
                isGameOver:true
                
            })

        }
        
      }
      resetGame=()=>{
        this.setState(prevState=>(
            {
                clickedEmojisList:[],
                    score:0,
                    topScore:prevState.score,
                    isWon:false,
                    isGameOver:false
            }
        )
            
        )
      }

    render(){
        const {emojisList,score,isWon,isGameOver,topScore} =this.state
        return(
            <div className="bg-container">
                <NavBar score={score} isGameOver={isGameOver} topScore={topScore}/>
                <div className="bottom-section">
                    <ul className="emojis-container">
                        {isGameOver?(<WinOrLose isWon={isWon} score={score} resetGame={this.resetGame}/>):(emojisList.map(eachItem=>(<EmojiCard details={eachItem} key={eachItem.id} onClickEmoji={this.onClickEmoji}/>)))}
                    </ul>

                </div>

            </div>

        )
    }
}

export default EmojiGame

