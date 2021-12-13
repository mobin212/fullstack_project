import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import { mobile } from '../responsive';
import { useParams } from 'react-router';
import { publicRequest } from './requestMethod';
import axios from 'axios';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding:'10px',flexDirection:'column'})}
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height:'40vh'})}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding:'10px'})}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer=styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width:'100%'})}
`;
const Filter=styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterSize=styled.select`
    margin-left: 10px;
    padding: 10px;
`;
const FilterSizeOption=styled.option`

`;
const AddContainer=styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:'100%'})}
`;
const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button=styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 6px;
    transition: all .2s linear;

    &:hover{
        background-color: #c0e4c0;
    }
`;


const Product = () => {
    const id = useParams().id
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct= async () => {
            try{
            const res =await publicRequest.get(`products/find/${id}`)
            setProduct(res.data)
        }
            catch(err){
                console.log(err)
            }
        };
        getProduct()
    }, [id])

    const handleQuantity = (type) =>{
        if(type === "dec" && quantity != 1){
            setQuantity(pre=>pre -1)
        }else if(type === "inc"){
            setQuantity(pre=>pre +1)
        }

    }

    const handleClick = (e) =>{
        addProduct({product:product,quantity:quantity})
    }

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.Title}</Title>
                    <Desc>
                        {product.desc}
                    </Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterContainer>Color</FilterContainer>
                            {/* {product.color.map((c)=>(
                                <FilterColor color={c} key={c}/>)
                            )} */}
                            <FilterColor color='black'/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onClick={(e)=>setSize(e.target.value)}>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <AiOutlineMinus onClick={()=>handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <AiOutlinePlus  onClick={()=>handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={(e)=>handleClick(e)}>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
