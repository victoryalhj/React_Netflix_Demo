import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className='not_found_page'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/013/354/209/small_2x/sad-face-emoticon-icon-free-vector.jpg"></img>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>We can't find the page you were looking for</p>
      <button onClick={goHome}>Go to Home Page</button>
    </div>
  )
}

export default NotFoundPage
