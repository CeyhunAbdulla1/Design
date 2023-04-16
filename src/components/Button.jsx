import React from 'react'

const Button = ({className,onClick,type,text}) => {
  return (
    <div>
        <button onClick={onClick} className={className} type={type}>{text}</button>
    </div>
  )
}

export default Button