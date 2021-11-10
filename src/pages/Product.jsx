import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
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
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src='../../images/A.jpg'/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Junsuit</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis
                        repellendus nostrum aliquam, natus dolorum ratione debitis odio ad maxime eveniet
                        pariatur, molestiae quidem exercitationem explicabo aperiam, cum ut minus?
                        magnam eos dolores repudiandae similique officiis consectetur totam!</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterContainer>Color</FilterContainer>
                            <FilterColor color='black'/>
                            <FilterColor color='darkblue'/>
                            <FilterColor color='gray'/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
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
                            <AiOutlineMinus/>
                            <Amount>1</Amount>
                            <AiOutlinePlus/>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product