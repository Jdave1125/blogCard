import { useState } from 'react'

import './App.css';

function App() {
 
  const[userInput,setUserInput] = useState({
    imageUrl:'https://w0.peakpx.com/wallpaper/115/408/HD-wallpaper-iceberg-minimalist.jpg',
    genre:'Design',
    title:'Embracing Minimalism',
    description:'From Minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity',
    author:'Annie Spratt',
  })

  const handleInputChange =(e)=>{
    const {name,value} = e.target;
    setUserInput((prevUserInput) => ({...prevUserInput,[name]:value}))
  }

  return (
    <>
      <div className='container'>

        <div className='card input-card'>
          <label htmlFor='imageUrl'>Image URL:</label>
          <input
            type='text'
            id='imageUrl'
            name='imageUrl'
            value={userInput.imageUrl}
            onChange={handleInputChange}
            />

         <label htmlFor='genre'>Genre:</label>
         <input
            type='text'
            id='genre'
            name='genre'
            value={userInput.genre}
            onChange={handleInputChange}
          />

          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            id='title'
            name='title'
            value={userInput.title}
            onChange={handleInputChange}
          />


          <label htmlFor='description'>Description:</label>
          <input
            type='text'
            id='description'
            name='description'
            value={userInput.description}
            onChange={handleInputChange}
          />

          <label htmlFor='author'>Author:</label>
          <input
            type='text'
            id='author'
            name='author'
            value={userInput.author}
            onChange={handleInputChange}
          />

        </div>



        <div className='card blog-card'>

          <img src={userInput.imageUrl} alt='Image'/>

          <div className='genre'>{userInput.genre}</div>
          <h2>{userInput.title}</h2>
          <h4>{userInput.description}</h4>
          <hr></hr>
          <h5>{userInput.author}</h5>
        </div>

      </div>
    </>
  )
}

export default App
