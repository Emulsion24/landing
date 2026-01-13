import { useEffect, useState } from 'react';

const useTypewriter = (text, speed = 40) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayed('');

    const type = () => {
      setDisplayed(text.slice(0, index + 1));
      index++;

      if (index < text.length) {
        setTimeout(type, speed);
      }
    };

    type();

    return () => {
      index = text.length;
    };
  }, [text, speed]);

  return displayed;
};
