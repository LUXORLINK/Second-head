
export const Card = ({title,clothes,oldPrice,newPrice,imageLink}) => {
    return (
        <div className="card">
        <div className="card__img">
          <img src={imageLink}/>
          </div>
          <h4 className="card__title"> { title } </h4>
          <h4 className="about-clothes"> { clothes } </h4>
          <div className="info-price">
          <h4 className="old-price"><s>{ oldPrice }</s></h4>
          <p className="new-price">{newPrice}</p>
          </div>
          </div>
          
    ) 
}

export default Card  
