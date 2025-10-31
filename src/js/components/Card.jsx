import React from 'react';

const Card = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"> 
            <div className="card h-100 d-flex flex-column"> 
                <img src={props.imageUrl} className="card-img-top" alt="Card visual" />
                <div className="card-body text-center py-5">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer bg-light mt-auto p-3 text-center">
                    <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div>
    );
};

export default Card;