import React, {useState} from 'react'

export default function TextFrom(props) {

    //hook
    const [text, setText]= useState(' ')

    //function1
    const upperCase=()=>{
        let newText= text.toUpperCase()
        setText(newText)
        props.showAlert('Text converted to uppercase', 'success')
    }

    //function2
    const lowerCase=()=>{
        let newText= text.toLowerCase()
        setText(newText)
        props.showAlert('Text converted to lowercase', 'success')
    }

    //function3
    const clearText=()=>{
        let newText= " "
        setText(newText)
        props.showAlert('Text is cleared', 'success')
    }

    //function4
    const handleOnchange=(event)=>{
        setText(event.target.value)
    }
    
    //function5
    const countingWords=()=>{
       let wordC=text.split(" ")
       let newWord_C= [];
       for(let word of wordC){
        if(word===""){
            continue
        }
        else{
            newWord_C.push(word)
        }
       } 
       return newWord_C
    }

    const wordCount = countingWords().length;  
    const countingChar= text.replace(/\s/g, '').length;

    return (
        <>
        <div className={`container bg-${props.bg} text-${props.rMode}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' style={props.textAreaColor} value= {text} onChange= { handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={ upperCase } disabled={text.trim().length===0} >convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={ lowerCase } disabled={text.trim().length===0}>convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={ clearText } disabled={text.trim().length===0}>clear</button>
        </div>
        <div className={`container my-3 text-${props.rMode}`}>
            <h1>Your Text Summary</h1>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            {/* <p>{ text.split(" ").length / 200} read time</p> */}
            <p>{wordCount} words and {countingChar} characters</p>
            <p>{ wordCount / 200} read time</p>
            
        </div>
        </>
    )
}
