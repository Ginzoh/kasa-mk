import { useState } from 'react';
import './css/ButtonWithText.css'
const ButtonWithText = ({ buttonText, text, defaultShowText = false }) => {
  const [showText, setShowText] = useState(defaultShowText);

  const handleClick = () => {
    setShowText(!showText);
    const arrowIcon = document.querySelector(`.${buttonText}-arrow-icon`);
    arrowIcon.classList.toggle('rotate');
    const textContainer = document.querySelector(`.${buttonText}-textContainer`);
    textContainer.classList.toggle('hide-text');
  };

  const arrowClass = showText ? `${buttonText}-arrow-icon arrow-icon rotate` : `${buttonText}-arrow-icon arrow-icon`;

  return (
    <div className={`textContainer ${buttonText}-textContainer ${showText ? '' : 'hide-text'}`}>
      <button className={`${buttonText}-button`} onClick={handleClick}>
        <span>{buttonText}</span>
        <span className={arrowClass}></span>
      </button>
      <span className={`${buttonText}-text textHidden`}>{text}</span>
    </div>
  );
};

export default ButtonWithText;
