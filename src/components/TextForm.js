import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        // console.log("Button is clicked." + Text);
        // setText("Sentence is set into uppercase form..."); 
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted into Uppercase.", "success");
      }
      
      const handleLoClick = ()=>{
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted into Lowercase.", "success");
      }
      
      const clearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert(" Text is Cleared Out.", "success");
      }
      
      const countVandC = ()=>{
        let countV = 0;
        let countC = 0;
        let i;
        
        for(i=0;i<Text.length;i++){
          if(Text.charAt(i) === 'A' || Text.charAt(i) === 'E' || Text.charAt(i) === 'I' || Text.charAt(i) === 'O' || Text.charAt(i) === 'U' || Text.charAt(i) === 'a' || Text.charAt(i) === 'e' || Text.charAt(i) === 'i' || Text.charAt(i) === 'o' || Text.charAt(i) === 'u'){
            countV++;
          }
          else{
            countC++;
          }
        }
        
        setText(countV + " Vowels and " + countC + " Consonants.");
        props.showAlert(" Text is Discriminated.", "success");
    }
  
  const handleOnChange = (event)=>{
    //   console.log("It is updated");
      setText(event.target.value);
  }
  const [Text, setText] = useState("");
  return (
    <>
      <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" onChange={handleOnChange} value={Text} placeholder="Enter the text here..." id="myBox" rows="6" style={{backgroundColor: props.mode==='dark'?'#454549':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
          </div>
          <button className="btn btn-primary mx-2 mb-3" onClick={handleUpClick} >Convert into Uppercase</button>
          <button className="btn btn-primary mx-2 mb-3" onClick={handleLoClick} >Convert into Lowercase</button>
          <button className="btn btn-primary mx-2 mb-3" onClick={clearText} >Clear Text</button>
          <button className="btn btn-primary mx-2 mb-3" onClick={countVandC} >Count Vowel and Consonant </button>
      </div>
      <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>Your Text Summary</h1>
          <p>{Text.split(" ").length} and words {Text.length} characters</p>
          <h1>Time to read the words</h1>
          <p>{0.008 * Text.split(" ").length} minutes read</p>
          <h1>Preview</h1>  
          <p>{Text}</p>
      </div>
    </>
  )
}

// Correct Way to update a text in useState Component:-

// setText("Text has been updated.");
