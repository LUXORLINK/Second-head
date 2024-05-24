import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from "./Cardwomen"

export const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing")
                const data = response.data;
                setProducts(data.slice(0, 4)) 
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
        <section className="section-girls">
            <h2 className="title-girl">WOMEN’S FASHION</h2>
            <h4 className="title-brend">Shop our new arrivals from established brands</h4>
            <div className="container-grid grid">
                {products.map(product => (
                    <Card 
                        key={product.id}
                        title={product.title}
                        clothes={product.description}
                        oldPrice={`$${(product.price * 1.5).toFixed(2)}`} 
                        newPrice={`$${product.price.toFixed(2)}`}  
                        imageLink={product.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default Products
