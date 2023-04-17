import React from 'react'

import {useSnapshot} from "valtio"

//to get the color from the state that was defined in the store directory for valtio 

import state from '../store'

const CustomButton = ({type, title, customStyles, handleClick}) => {

  const generateStyle = (type) => {
    const snap = useSnapshot(state)
    if(type === "filled") {
      return {
        backgroundColor: state.color,
        color: '#fff'
      }
    }
  }
  return (
    <button 
    className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    onClick={handleClick}
    >CustomButton</button>
  )
}

export default CustomButton