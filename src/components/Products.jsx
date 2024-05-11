import image1 from '../assets/images/girl-4.jpg'
import image2 from '../assets/images/girl-3.jpg'
import image3 from '../assets/images/girl-2.jpg'
import image4 from '../assets/images/girl-1.jpg'

import { Card } from "./Card"

export const Products = () => {
    return (
    <section className="section-girls">
       <h2 className="title-girl">WOMEN’S FASHION</h2>
        <h4 className="title-brend">Shop our new arrivals from established brands</h4>

    <div className="container-grid grid">
    
   

   <Card 
   title= "IGURE "
   clothes="GREEN MUSCLE FIT POLO SHIRT"
   oldPrice={"$229.00"}
   newPrice={"$129.00"}
   imageLink={image1}
   />
   <Card 
   title= "IGURE "
   clothes="GREEN MUSCLE FIT POLO SHIRT"
   oldPrice={"$229.00"}
   newPrice={"$129.00"}
   imageLink={image2}
   />
   <Card 
   title= "IGURE"
   clothes="GREEN MUSCLE FIT POLO SHIRT"
   oldPrice={"$229.00"}  
   newPrice={"$129.00"}
   imageLink={image3}
   />
   <Card 
   title= "IGURE "
   clothes="GREEN MUSCLE FIT POLO SHIRT"
   oldPrice={"$229.00"} 
   newPrice={"$129.00"}
   imageLink={image4}
   />
  
      </div>
  </section>
  
    )
}
 
export default Products