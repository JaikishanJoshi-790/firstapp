import React, { useState } from 'react'

export default function TextForm(props) {
    const changeUpcase = () => {
        // console.log("function is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("All words are now in Upercase","Success");
    }
    const changelocase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("All words are now in Lowercase ","Success");
    }
    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Textbox is now Empty","Success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("AI is speaking for you","Success");
    }
    const removeExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are now removed","Success");
    }

    const textChange = (event) => {
        // console.log("text area is change");
        setText(event.target.value)
    }
    const [text, setText] = useState('tell us about your query')
    return (
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='my-5'>Enter you query</h1>
            <div className="mb-3 my-5">
                <textarea onChange={textChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} className="form-control" value={text} id="mybox" rows="8"></textarea>
                <button onClick={changeUpcase} className="my-4 btn btn-primary">convert to upercase</button>
                <button onClick={changelocase} className="my-4 mx-2 btn btn-primary">convert to lowercase</button>
                <button onClick={clearText} className="my-4 mx-2 btn btn-primary">clear</button>
                <button onClick={speak} className="my-4 mx-2 btn btn-primary">Tap to Listen</button>
                <button onClick={removeExtraSpace} className="my-4 mx-2 btn btn-primary">Remove Extra Spaces</button>
            </div>
            <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Your Summary about you uper peragraph</h3>
                <p>Peragraph have <b>{text.length<1 ? 0 : text.split(" ").length}</b> words & <b>{text.length}</b> character.</p>
                <p>You need <b>{0.008 * text.split(" ").length}</b> minutes to read this.</p>
                <h3>Text Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
