import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Card.css';

const Card = ({ image, title, description, children}) => {
    return (
        <div className="card">
            {image && <img src={image} alt={title} className="card-image" />}
            <div className="card-content">
                {title && <h2 className="card-title">{title}</h2>}
                {description && <p className="card-description">{description}</p>}
                {children && <div className="card-children">{children}</div>}
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
};

export default Card;