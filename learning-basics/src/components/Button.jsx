import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/Button.css';

const Button = ({ label, onClick, type = 'button', disabled = false, variant = 'default', className = '' , to, href,}) => {
    if (to) {
        return (
        <Link to={to} className={`btn btn-${variant} ${className}`}>
            {label}
        </Link>
        );
    }

    if (href) {
        return (
            <a 
                href={href}
                className={`btn btn-${variant} ${className}`}
                target="_blank"
                rel= "noopener noreferrer"
            >
                {label}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-${variant} ${className}`}
            >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    variant: PropTypes.string,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
};

export default Button;