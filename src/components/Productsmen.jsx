import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from "./Cardwomen";


export const Productsmen = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
 
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios("https://fakestoreapi.com/products/category/men's clothing")
                const data = res.data
                setProducts(data.slice(0, 4)) // 4 продукта
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <section className="section-men">
            <h2 className="title-men">MEN’S FASHION</h2>
            <h4 className="title-brend">Shop our new arrivals from established brands</h4>
            <div className="container-grid grid">
                {products.map(product => (
                    <Card 
                        key={product.id}
                        title={product.title}
                        clothes={product.description}
                        oldPrice={`$${(product.price * 1.5).toFixed(2)}`}  // Старая цена примерно на 50% выше
                        newPrice={`$${product.price.toFixed(2)}`} 
                        imageLink={product.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default Productsmen
