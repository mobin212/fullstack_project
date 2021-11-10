import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'


const Container =styled.div`

`;
const Wrapper =styled.div`
    padding: 20px;
`;
const Title =styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;
const TopButton =styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type ==='filled' && 'none'};
    background-color: ${props=>props.type ==='filled' ? 'black' : 'transparent'};
    color: ${props=>props.type ==='filled' && 'white'};
`;
const TopTexts =styled.div`

`;
const TopText =styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;
const Bottom =styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info =styled.div`
    flex: 3;
`;
const Product =styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail =styled.div`
    display: flex;
    flex: 2;
`;
const Image =styled.img`
    width: 60%;
    height: 12em;
    object-fit: cover;
`;
const Details =styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName =styled.span`
    
`;
const ProductId =styled.span`
    
`;
const ProductColor =styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;
const ProductSize =styled.span`
    
`;
const PriceDetail =styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountCpntainer =styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount =styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice =styled.div`
    font-size: 30px;
    font-weight: 200;
`;
const Hr=styled.hr`
    background-color: #ddc5c5;
    border: none;
    height: 1px;
`;

const Summary =styled.div`
    flex: 1;
    border: .5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle=styled.h1`
    font-weight: 200;
`;
const SummaryItem=styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type ==='total' && '500'};
    font-size: ${props=>props.type ==='total' && '24px'};
`;
const SummaryItemText=styled.span`

`;
const SummaryItemPrice=styled.span`

`;
const SummaryButton=styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 600;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar/>
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your Wishlist(0)</TopText>
                        </TopTexts>
                        <TopButton type='filled'>CHECKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail>
                                    <Image src='../../images/shirt.jpg'/>
                                    <Details>
                                        <ProductName><b>Product:</b>HAKURA T-SHIRT</ProductName>
                                        <ProductId><b>Id:</b>938178</ProductId>
                                        <ProductColor color='gray'/>
                                        <ProductSize><b>Size:</b>M</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountCpntainer>
                                        <AiOutlinePlus/>
                                        <ProductAmount>2</ProductAmount>
                                        <AiOutlineMinus/>
                                    </ProductAmountCpntainer>
                                    <ProductPrice>$ 30</ProductPrice>
                                </PriceDetail>
                            </Product>
                            <Hr/>
                            <Product>
                                <ProductDetail>
                                    <Image src='../../images/shoe1.png'/>
                                    <Details>
                                        <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                        <ProductId><b>Id:</b>938178</ProductId>
                                        <ProductColor color='black'/>
                                        <ProductSize><b>Size:</b>37.5</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountCpntainer>
                                        <AiOutlinePlus/>
                                        <ProductAmount>2</ProductAmount>
                                        <AiOutlineMinus/>
                                    </ProductAmountCpntainer>
                                    <ProductPrice>$ 30</ProductPrice>
                                </PriceDetail>
                            </Product>
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemText>$ 80</SummaryItemText>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemText>$ 5.9</SummaryItemText>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemText>$ -5.9</SummaryItemText>
                            </SummaryItem>
                            <SummaryItem type='total'>
                                <SummaryItemText >Total</SummaryItemText>
                                <SummaryItemText>$ 80</SummaryItemText>
                            </SummaryItem>
                            <SummaryButton>CHECKOUT NOW</SummaryButton>
                        </Summary>
                    </Bottom>
                </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
