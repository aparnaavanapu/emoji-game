import './index.css'


const EmojiCard=(props)=>{
    const {details,onClickEmoji}=props
    const {id,emojiName,emojiUrl}=details

    const handleClick=()=>{
        onClickEmoji(id);
    }

    return(
        <li className="emoji-container">
            <button className="btn" onClick={handleClick}><img src={emojiUrl} alt={emojiName} /></button>
        </li>
    )

}

export default EmojiCard