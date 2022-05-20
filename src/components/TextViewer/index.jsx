import React, { useEffect, useState } from "react";
import { loadText, loadJson } from "../../utils";
import Text from "../Text";

function TextViewer(props) {
    const [ textDetails, setTextDetails ] = useState({});
    const [ text, setText ] = useState('loading...');
    useEffect(() => {
        loadText(props.textPath).then(_text => {
            _text = _text.replaceAll(' ', ' : ');
            setText(_text);
        });

        loadJson(props.textPath.replace('txt','json')).then(_textDetails => {
            setTextDetails(_textDetails);
        });
        
    }, [props.textPath, setText]);

    return <div className='text-viewer'><Text text={text} textDetails={textDetails} click={props.click} /></div>;
}

export default TextViewer;
