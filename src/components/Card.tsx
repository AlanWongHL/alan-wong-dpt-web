import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  image?: string;
  to?: string;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, children, className = '', image, to }) => {
  const content = (
    <>
      {image && <img src={image} alt={title || 'Card image'} className="card-image" />}
      <div className="card-content">
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {title && <h3 className="card-title">{title}</h3>}
        {children}
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`card card-link ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`card ${className}`}>
      {content}
    </div>
  );
};
