import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
      </div>
      <p> &copy; 2024 farinaco.com</p>
    </div>
  )
}

export default Footer
