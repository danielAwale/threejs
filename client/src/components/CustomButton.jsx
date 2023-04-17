import React from 'react'

const CustomButton = ({type, title, customStyles, handleClick}) => {
  return (
    <botton 
    className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    >CustomButton</botton>
  )
}

export default CustomButton