import React from 'react';
import Link from '@docusaurus/Link';

import './Card.css';

const Card = ({ data }) => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card__header">
                        <img src={data.imgSrc} alt={data.title} className="card__image" width={600} />
                    </div>
                    <div className="card__body">
                        <span className="tag tag-blue">{data.category}</span>
                        <h2>{data.title}</h2>
                        {/* <p>course paragraph here</p> */}
                    </div>
                    <div className="card__footer">
                        <Link
                            className="card__btn button button--primary"
                            to={`/docs/${data.path}`}>
                            Zobacz projekty →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;
