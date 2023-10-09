import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { FaFacebook } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { IconContext } from 'react-icons/lib';

const SocialButton = () => {

  return (

    <div className='logos'>
    <IconContext.Provider value={{size: '4rem', color:'black'}}>

    <Button><FaFacebook/></Button>
    <Button><FaGithub/></Button>
    <Button><FaLinkedin/></Button>

    </IconContext.Provider>
    <h5>O usa tu mail para Registrartre</h5>

    </div>
    
  )
}

export default SocialButton