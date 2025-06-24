import React , {useState} from 'react'
import Body from './Body'
import {useLocation} from 'react-router-dom';

let words = 0;
let characters = 0;

function TextForm(props) {
  const location = useLocation();
  const {Mode} = location.state || {};
  console.log(Mode);

  function handleOnChange(event){
    setText(event.target.value);
    words = text.trim().split(" ").filter((element) => element.length !== 0).length;
    characters = text.trim().split("").length;
  }

  function handleUpOnClick(){
    let upperText = text.toUpperCase();
    setText(upperText);
  }

  function handleLoOnClick(){
    let lowerText = text.toLowerCase();
    setText(lowerText);
  }
 
  const [text, setText] = useState('');



  return (
    <>
        <div className="container">
          <label htmlFor="inputPassword5" className="form-label"><b style={{fontFamily:"sans-serif"}}>{props.heading}</b></label>
          <textarea id="inputTextArea" className="form-control" value={text} onChange={handleOnChange} rows="8"></textarea>
          <div className="mt-3 d-flex gap-3">
            <button type="button" onClick={handleUpOnClick} className="btn btn-primary">Convert Uppercase</button>
            <button type="button" onClick={handleLoOnClick} className="btn btn-primary">Convert Lowercase</button>
          </div>
          <div className="mt-3">
            <div className="">
              Total characters : {characters} and Total words : {words}
            </div>
          </div>
          <div className="mt-3">
            <Body data={text} />
          </div>
        </div>
    </>
  )
}

export default TextForm;