import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase());
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("converted to lowercase", "success");
    }
    const handleClClick=()=>{
        setText('');
        props.showAlert("Text area cleared", "success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
</div>
 <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
 <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
 <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}


