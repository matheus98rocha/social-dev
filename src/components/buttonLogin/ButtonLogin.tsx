import React from 'react'
import './buttonLogin.scss'

interface ButtonProps {
  style: React.CSSProperties
  buttonText: string
  icon: JSX.Element
}

const ButtonLogin = ({ style, buttonText, icon }: ButtonProps) => {
  return (
    <button style={style}>
      {icon}
      <p>{buttonText}</p>
    </button>
  )
}

export default ButtonLogin
