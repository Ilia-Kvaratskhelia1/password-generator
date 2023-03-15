import React from 'react'
import { pass } from '../intefraces/Interface';
import "./Checkboxs.css"
function Checkboxs(props:any) {
  const {value , onChange , text} = props;
    return (
    <>
        <div className='checkBoxes'>
        <p>{text}</p>
        <input  type="checkbox" checked={value} onChange={onChange} />
        </div>
    </>
  )
}

export default Checkboxs