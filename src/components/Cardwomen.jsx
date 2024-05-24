import React, { useState } from 'react'


export const Card = ({ title, clothes, oldPrice, newPrice, imageLink }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    return (
        <div className="card">
            <div className="card__img">
                <img src={imageLink} alt={title} />
            </div>
            <h4 className="card__title" onClick={toggleExpand}>{title}</h4>
            {expanded && (
                <div>
                    <h4 className="about-clothes" onClick={toggleExpand}>{clothes}</h4>
                    <div className="info-price">
                        <h4 className="old-price"><s>{oldPrice}</s></h4>
                        <p className="new-price">{newPrice}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card
