import React from 'react';
import './index.css';
import loveLogo from '../../../images/love-water-savings-logo.png';
import trustLogo from '../../../images/trust-pilot-logo.svg';
import QuoteForm from '../quote-form';

interface Props {
  title: string;
  firstP: string;
  secondP: string;
  thirdP: string;
}

const SectionOne: React.FC<Props> = ({ title, firstP, secondP, thirdP }) => {
  return (
    <section className="section-one">
      <div className="container section-one-content">
        <div className="content-text">
          <h1 className="title">{title}</h1>
          <p>{firstP}</p>
          <p>{secondP}</p>
          <p>{thirdP}</p>
          <div className="content-logo">
            <img src={loveLogo} alt="Logo" width="150px" />
            <img src={trustLogo} alt="Logo" width="100px" />
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
};

export default SectionOne;
