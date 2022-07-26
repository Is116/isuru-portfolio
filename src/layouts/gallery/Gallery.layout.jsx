import React from 'react'
import InstaFeeds from '../../components/instagram-gallery/InstaFeeds.component'

const Gallery = () => {
  return (
    <div className='col-12 mx-auto mt-5'>
        <h2>GALLERY</h2>
        <hr/>
        <InstaFeeds token="IGQVJVYm5aOTFtOFgxZAVpuWTZAnUVE5MVZApTTE0ankwWWZA6MTRQNXNYOWVaYXhtVS1hUWtiNW5fNW5VZATZACdElOdWFBMU1VZA1lSRGFWeU5IcWxUS081ZA3gxWm4yMGRUX3V2TkFUa3hIbGhteWR0eUEzagZDZD" limit="12"/>
    </div>
  )
}

export default Gallery