import React from 'react'
import styled from 'styled-components'
import {BsFillCartFill} from 'react-icons/bs'
import {AiOutlineSearch,AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Info = styled.div`
    opacity: 0;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color:rgba(0,0,0,.2);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: all .5s ease-in-out;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 250px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    background-color: #daeaec;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;
const Circle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    margin-left: 1.2em;
`;
const Image = styled.img`
    height: 50%;
    width: 50%;
    z-index: 2;
    margin-left: 4.1em;
    border-radius: 10px;
`;

const Icon = styled.div`
    height: 3em;
    width: 3em;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all .5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
    console.log(item)
    return (
        <Container>
            <Circle />
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <BsFillCartFill/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <AiOutlineSearch/>
                    </Link>
                </Icon>
                <Icon>
                    <AiFillHeart/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
