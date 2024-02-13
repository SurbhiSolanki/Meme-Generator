import React from 'react'
//  import meme from '../images/meme.webp'

const Input = () => {
  const [meme, setMeme] =React.useState({
    topText: "",
    bottomText:"" ,
    randomImage: "https://via.placeholder.com"
  })
  const [allMeme, setAllMeme] = React.useState([])

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then(data =>setAllMeme(data.data.memes))
  },[])

  function getMemeImage(){
   
    const randomnumber = Math.floor(Math.random()*allMeme.length)
    const  url = allMeme[randomnumber].url
    setMeme(prevMeme =>({
      
        ...prevMeme,
        randomImage: url
    }
    ))
  }
  function handleChange(event) {
    const {name,value} = event.target 
    setMeme(prevMeme =>({
      ...prevMeme,
      [name] : value
    }))
  }
  return (
    <div className='input'>
      <div className='text'>
        <div className='inputs'>
         <input type="text" className='enter' placeholder='Top text'value={meme.topText} onChange={handleChange} name="topText"/>
         <input type="text" className='enter' placeholder='Bottom text' name="bottomText" value={meme.bottomText} onChange={handleChange}/>
        </div>
       <button onClick={getMemeImage} >Get a new image </button> 
      </div>
      <div className='meme'>
        <img src={meme.randomImage} alt="" className='imgmeme '/>
        <h2 className='memetext top'>{meme.topText}</h2>
        <h2 className='memetext bottom'>{meme.bottomText}</h2>
      </div>
    </div>
  )
}

export default Input
