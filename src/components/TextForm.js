import React , {useState} from 'react'

function TextForm(props) {

  function handleOnChange(event){
    setText(event.target.value);
  }

  function handleOnClick(){
    let upperText = text.toUpperCase();
    setText(upperText);
  }
 
  const [text, setText] = useState('');

  return (
    <>
        <div className="container">
          <label htmlFor="inputPassword5" className="form-label"><b style={{fontFamily:"sans-serif"}}>{props.heading}</b></label>
          <textarea id="inputTextArea" className="form-control" value={text} onChange={handleOnChange} rows="8"></textarea>
          <div className="mt-3">
            <button type="button" onClick={handleOnClick} className="btn btn-primary">Convert Uppercase</button>
          </div>
        </div>
    </>
  )
}

export default TextForm;