import React from 'react'

import loginImage from '../../assets/loginImage.jpg'
import ButtonLogin from '../../components/buttonLogin/ButtonLogin'
import { BsFacebook, BsGoogle, BsGithub } from 'react-icons/bs'

import './login.scss'

const Login: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="loginContainer">
        <div className="loginWrapper">
          <h1>Welcome to Social Dev</h1>
            <ButtonLogin
              icon={<BsFacebook />}
              style={{ backgroundColor: '#3b5998' }}
              buttonText={'Login With Facebook'}
            />

            <ButtonLogin
              icon={<BsGoogle />}
              style={{ backgroundColor: '#de5246' }}
              buttonText={'Login With Google'}
            />

            <ButtonLogin
              icon={<BsGithub />}
              style={{ backgroundColor: '#171515' }}
              buttonText={'Login With Github'}
            />
        </div>
        <div className="imageContainer">
          <img src={loginImage} alt="Landing Page" />
        </div>
      </div>
    </div>
  )
}

export default Login
