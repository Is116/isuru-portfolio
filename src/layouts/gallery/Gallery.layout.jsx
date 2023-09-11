import React from 'react'
import InstaFeeds from '../../components/instagram-gallery/InstaFeeds.component'

const Gallery = () => {
  return (
    <div className='col-12 mx-auto mt-5'>
        <h2>GALLERY</h2>
        <hr/>
        <InstaFeeds token="IGQWRPM0NGeV9NdXV5ZAklvV1hibktNMU9YVDluLThpaGNrbHVSZAkRYUTJXTWtLaVUzTEVicExiU0lxZAl9oUE9FalBramMxZATN5dmtPbDM5VE83TWNCbGhWN21CZAENYallzTW1lRGE4Snl1c0JfS1hMRDI1SGlKWDAZD" limit="12"/>
    </div>
  )
}

export default Gallery
