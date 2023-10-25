import React, { useEffect, useState } from 'react';
import '../../styles/Description.css';

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
  const text = `
  My name is Kiruba Ebenezer Ramanathan.
  Senior Software engineer in Chargebee.
  Experienced in Subscription Billing & Payment SaaS.
  Loyal employee to the "True work culture with 6+ yoe."
  Father to a wonderful daughter.
  Husband to a lovely wife.
  I am looking forward for this oppurtunity.!`;
  const intervals = [12000, 3000, 2000, 2500, 5000, 2000, 3000];
  const paragraphs = text.split('\n').filter(para => para.trim() !== '');
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes(prevIndexes => [...prevIndexes, prevIndexes.length]);
    }, intervals[visibleIndexes.length] || intervals[0]);

    return () => {
      clearInterval(interval);
    };
  }, [visibleIndexes, intervals]);

  return (
    <div className="description-text">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={visibleIndexes.includes(index) ? 'visible' : 'hidden'}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Description;
