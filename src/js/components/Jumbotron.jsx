import React from 'react';

const Jumbotron = ({ title, text, buttonLabel, buttonUrl }) => {
    return (
        <header className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-4 fw-bold">{title}</h1> 
                <p className="lead">{text}</p> 
                <a className="btn btn-primary btn-lg" href={buttonUrl} role="button">
                    {buttonLabel}
                </a>
            </div>
        </header>
    );
};

export default Jumbotron;