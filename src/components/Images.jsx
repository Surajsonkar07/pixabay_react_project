import React, { useContext } from 'react'
import PixabayContext from '../context/pixabay_context'


const Images = () => {
     const {imageData}=useContext(PixabayContext)
  return (
    <div className='flex'>
        {imageData.map((image)=><div key={image.id}>
<div className="items">
    <img src={image.largeImageURL} alt="" className='images' />
</div>

            </div>)}
      
    </div>
  )
}

export default Images
