import React from "react";
import Word from "../Word";

function Text(props) {
    const showTranslation = (word) => {
        const wordDetails = props.textDetails?.find?.(textDetail => textDetail.word === word) || {transcription: '', translation: ''};
        // Show textDetails in message-box
        alert(`${wordDetails.word} - ${wordDetails.transcription} - ${wordDetails.translation}`); 
    }

    // Break props.text into word Using the Word component by splitting on the : character
    const Words = props.text && props.text.length && props.text.split(' : ').map((word, index) => {
        
        return <React.Fragment><Word index={index} key={index} word={word} showTranslation={showTranslation} click={props.click} /><span className="separator"> : </span></React.Fragment>;
    });

    return <React.Fragment>{Words}</React.Fragment>;
};

export default Text;