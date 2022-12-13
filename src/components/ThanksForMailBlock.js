import React from 'react';

const MESSAGE = 'Thank you for your message!';
const BUTTON_NAME = 'Send one more';

function ThanksForMailBlock({ changeMailIsSent }) {
    return (
        <div>
            <span>{MESSAGE}</span>
            <button className="submitButton" onClick={changeMailIsSent}>
                {BUTTON_NAME}
            </button>
        </div>
    );
}

export default ThanksForMailBlock;
