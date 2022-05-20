function FindTheLetter() {
    this.letters = {

    }

    // Grab all distinct letters from the DOM and store them in a set
    let allLetters = Array.from(document.querySelectorAll('.letter'))
    allLetters = new Set(allLetters.map(e => e.innerText));
    // Remove from the Set the following chars: ' ', '', :, ::
    allLetters.delete(' ');
    allLetters.delete('');
    allLetters.delete(':');
    allLetters.delete('።');

    this.currentLetter = null;

    const clickOnLetter = (letter, totalCount, letterId) => {
        // If the message box is visible, hide it
        const messageBox = document.querySelector('.message-box');
        // hide the box
        if(!messageBox.classList.contains('hidden')) {
            messageBox.classList.add('hidden');
        }

        let result = {
            success: false,
            reason: null
        };

        // init letter if not exist
        if (!this.letters[letter]) {
            if(!this.currentLetter) {
                this.currentLetter = letter;                
            } else {
                // If the current letter length of clicked is less than the totalCount, then it is not a valid letter
                if(this.letters[this.currentLetter].clicked.length < this.letters[this.currentLetter].totalCount) {
                    result.reason = 'not_current_letter';
                } else {
                    // change letter
                    // Pick a random letter from the set that is not in this.letters
                    const newLetter = this.letters.all.values().next().value;
                    this.currentLetter = newLetter;
                }
                return result;
            }

            this.letters[letter] = {
                totalCount,
                clicked: [letterId]
            }
            result = {
                success: true,
                reason: "added"
            }
        } else {
            if(!this.letters[letter].clicked.includes(letterId)) {
                this.letters[letter].clicked.push(letterId)
                result = {
                    success: true,
                    reason: "added"
                }
            } else {
                result = {
                    success: false,
                    reason: "already_clicked"
                }
            }
        } 
        updateGameBar();
        return result;
    }

    const updateGameBar = () => {
        const gameBar = document.querySelector('.game-bar');
        let html = '';
        Object.keys(this.letters).forEach(letter => {
            html += `<div class="letter-box">
                        <div class="letter-box-letter">${letter}</div>
                        <div class="letter-box-count">${this.letters[letter].clicked.length} / ${this.letters[letter].totalCount}</div>
                    </div>`
        });
        gameBar.innerHTML = html;   

    }

    const showMessage = (message) => {
        const messageBox = document.querySelector('.message-box');
        // Show the box
        messageBox.classList.remove('hidden');
        const messageBoxContent = document.querySelector('.message-box-content');
        messageBoxContent.innerHTML = message;
    }

    const start = () => {
        // Clear all highlights on page
        const allHighlightedLetters = Array.from(document.querySelectorAll('.letter.highlight'));
        allHighlightedLetters.forEach(e => e.classList.remove('highlight'));

        // Write "start" on the game-bar
        document.querySelector('.game-bar').innerHTML = '-- FIND THE LETTER --';
        setTimeout(() => {
            showMessage(`Click on a letter to start the game`);
        }, 3000)
    }

    return {
        clickOnLetter,
        start,
    }
}

export default FindTheLetter;