import React, { InputHTMLAttributes, useState } from 'react';
import './App.css';
import Checkboxs from './components/Checkboxs';
import { pass } from './intefraces/Interface';
function App() {
  const [password , setPassword]= useState<pass | any>({
    length:10,
    uppercase:false,
    lowercase:false,
    numbers:false,
    symbol:false
  });
  const [generated , setGenerated] =useState(true)
  const [handleText , setHandleText]=useState("")
  const [copy , setCopy] = useState(false)
  const handelChangeUpperCase = ()=>{
    setPassword({
      ...password,
      uppercase:!password.uppercase
    })
  }
  const handelChangeLowerCase=()=>{
    setPassword({
      ...password,
      lowercase:!password.lowercase
    })
  }

  const handelChangeNumbers=()=>{
    setPassword({
      ...password,
      numbers:!password.numbers
    })
  }
  const handelChangeSymbol=()=>{
    setHandleText({
      ...password,
      symbol:!password.symbol
    })
  }
  const setPasswordLength = (val:any)=>{
    setPassword({
      ...password,
      length:val,
    })
  }

  const generatePassword =()=>{
    setGenerated(!true)
    setTimeout(() => {
    setGenerated(true)
      
    }, 900);
    const numbersArray = [1,2,3,4,5,6,7,8,9,0]
    const SymbolsArray = ["!","@","#","%","^","&","*","(",")"]

    const characterCodes = Array.from(Array(26)).map((_e , i )=>i + 97);
    const lowerCaseLetters = characterCodes.map(letter => String.fromCharCode(letter) )
    const  upperCaseLetter = lowerCaseLetters.map(letter =>letter.toUpperCase())
    const {length , uppercase , lowercase , numbers , symbols}:any = password;

    const generateTheWord = (length:any , uppercase:any , lowercase:any , numbers:[] , symbols:string)=>{
      const availableCharacters = [
        ...(uppercase ? upperCaseLetter : []),
        ...(lowercase ? lowerCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? SymbolsArray : [])

      ]
      const shuffleArray = (array:any )=>array.sort(()=>Math.random() - 0.5)
      const characters = shuffleArray(availableCharacters).slice(0, length)
      setHandleText(characters.join(" "))
      return characters;
      } 
      generateTheWord(length , uppercase , lowercase , numbers , symbols)
    }
    
    return (
      <div className='Maincontainer'>
        <h1>Password Generator</h1>
     <div className='cont'>
     <div className='generatedPassword'>
      <div className='input'>
      <input type="text" value={handleText} onChange={(e)=>setHandleText(e.target.value)} maxLength={18}/>
        <button onClick={()=>{
          if(handleText.length > 0){
            navigator.clipboard.writeText(handleText)
            setCopy(true)
            setInterval(()=>{
              setCopy(false)
            },2000)
          
          }
        }}> Copy </button>
      </div>
        </div>
<div className='underCont'>
  <div className='rangeInfo'>
    <span>Character Length</span>
  <label>{password.length}</label>
  </div>
<input type="range"  className='numberLength' maxLength={18} value={password.length} onChange={(e)=>setPasswordLength(e.target.value)} max={20} min={3}/>
        <Checkboxs text={"Include UpperCase Letter"} value={password.uppercase} onChange={handelChangeUpperCase}/>
        <Checkboxs text={"Include LowerCase Letter"} value={password.lowercase} onChange={handelChangeLowerCase}/>
        <Checkboxs text={"Include Numbers Letter"} value={password.numbers} onChange={handelChangeNumbers}/>
        <Checkboxs text={"Include Symbol"} value={password.symbol} onChange={handelChangeSymbol}/>
        <button className={generated ? "generate" : "completed"} onClick={generatePassword }>{generated ?" Generate Password " : "Generated"}</button>
</div>
  </div>
     </div>
    );
  }
  
export default App;
