import './Letter.css';
function Letter(props) {
  const countLetters = (letter) => {
    return document.querySelectorAll(`[data-letter="${letter}"]`).length;
  };

  const letterClicked = (event) => {
    // Call props.click with the letter that was clicked and the total number of that letter in the text
    const letter = event.target.attributes['data-letter'].value;
    const result = props.click(letter, countLetters(letter), event.target.id);
    if (result?.success) {
      // Highlight letter
      event.target.classList.add('highlight');
    }
  };

  return (
    <span
      className='letter'
      data-letter={props.letter}
      onClick={letterClicked}
      id={`${props.letter}_${props.index}`}
    >
      {props.letter}
    </span>
  );
}

export default Letter;
