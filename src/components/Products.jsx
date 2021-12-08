import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const Products = ({params, filters, sort}) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setfilteredProducts] = useState([])

    useEffect(()=>{
        const getProducts = async ()=>{
            try{
                const res = await axios.get('http://localhost:5000/api/products')
                setProducts(res.data)
                console.log(res)
            }catch(err){

            }
        };
        getProducts()
    },[params]);
    console.log(sort)

    useEffect(()=>{
        params && setfilteredProducts(
            products.filter((item)=>
                Object.entries(filters).every(([key, value])=>
                item[key].includes(value)
                )
            )
        )
    },[products,params,filters])

    useEffect(()=>{
        if(sort === 'newest'){
            const a= filteredProducts.sort((a,b)=> a.createdAt - b.createdAt)
            setfilteredProducts(a)
            // console.log(a)
            
        }else if(sort === 'asc'){
            const a= filteredProducts.sort((a,b)=> a.price - b.price)
            setfilteredProducts(a)
            // console.log(a)
            
        }else if(sort === 'desc'){
            const a= filteredProducts.sort((a,b)=> b.price - a.price)
            setfilteredProducts(a)
            // console.log(a)
            
        }
    },[sort]);
    return (
        <Container>
            {filteredProducts.map((item,index)=>{
                return(
                    <Product item={item} key={index}/>
                )
            })}
        </Container>
    )
}

export default Products
