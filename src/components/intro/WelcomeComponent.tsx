import React, { useEffect, useState } from 'react';
import '../../styles/Welcome.css';

interface WelcomeProps {
  name: string;
}

const greetings = ["Hello"];

const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  const [greetingIndex, setGreetingIndex] = useState(-1);

  useEffect(() => {
    const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          setGreetingIndex(prevIndex => (prevIndex + 1) % greetings.length);
        }, 3000);
  
        return () => {
          clearInterval(interval);
        };
      }, 5000);
  
      return () => {
        clearTimeout(timeout);
      };
  }, []);

  return (
    <div className="welcome-text">
      {greetings.map((greeting, index) => (
        <span
          key={index}
          className={index === greetingIndex ? 'visible' : 'hidden'}
        >
          {greeting}, {name}!
        </span>
      ))}
    </div>
  );
};

export default Welcome;
