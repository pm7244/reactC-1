
import React, { useState } from 'react';
export default function FormText(props) {

    const handleUpClick = () => {
        console.log("uppercase was clicked"+ text)
        let newtext = text.toUpperCase();
        setText(newtext);
    //    props.showAlert("Converted to UppeCase", "Success : ")
      }
    
      const handleOnChange = (even) => {
        //console.log("onchange was clicked")
        setText(even.target.value)
      }
    
      const handlockClick = () => {
        console.log("uppercase was clicked"+ text)
        let newtext = text.toLowerCase();
        setText(newtext)
        // props.showAlert("Converted to lowerCase", "success : ")
        // props.showAlert("Converted to LowerCase")
      }
    
    
      const handClrClick = (even) => {
        // console.log("onchange was clicked")
        setText(even.target.value)
        // props.showAlert(" Text is Remove ", "success : ")
      }
    
      const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        // props.showAlert("Remove to CopyText", "success : ")
      }
    
      const handleExtraSpace = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
      //  props.showAlert("Remove to ExtraSpace", "success : ")
      }



const [text, setText] = useState("")
return (
  <>
    <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control " value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
      </div>

      <button type="button" className=" btn btn-primary font-weight-bold " onClick={handleUpClick}>Convert to UpperCase</button>
      <button type="button" className="btn btn-primary mx-3" onClick={handlockClick}>Convert to lowerCase</button>
      <button type="button" className="btn btn-primary mx-3" onClick={handClrClick}>Clear All</button>
      <button type="button" className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
      <button type="button" className="btn btn-primary font-weight-light  mx-3" onClick={handleExtraSpace}>Remove To Extra Space</button>
    </div>

    <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1> your text summary</h1> 
     <p> {text.split(" ").length} words and {text.length} characters</p>
   <p> {0.008 * text.split(" ").length} Minutes read</p>
    </div>
  </>
)
} 