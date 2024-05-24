import React, { useState } from 'react'
export const Card2 = ({ title, clothes, oldPrice, newPrice, imageLink }) => {

    const [expan, setExpan] = useState(false)

    const toggleExpand = () => {
        setExpan(!expan)
    }

    return (
        <div className="card">
            <div className="card__img">
                <img src={imageLink} alt={title} />
            </div>
             
            <h4 className="card__title" onClick={toggleExpand}>{title}</h4>
            {expan && (
                <div>
                    <h4 className="about-clothes">{clothes}</h4>
                </div>
            )}
           <div className="info-price">
                <h4 className="old-price"><s>{oldPrice}</s></h4>
                <p className="new-price">{newPrice}</p>
            </div>
        </div>
    )
}

export default Card2
