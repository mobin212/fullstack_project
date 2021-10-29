import styled from "styled-components"
import{RiArrowLeftSFill, RiArrowRightSFill} from 'react-icons/ri'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: coral; */
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: .5;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    padding: 50px;
    flex: 1;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction='left'>
                <RiArrowLeftSFill/>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src='../images/1.jpg'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>DONT COMPROMISE ON STYLE GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src='../images/2.jpg'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Desc>DONT COMPROMISE ON STYLE GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src='../images/3.jpg'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>POPULAR SALE</Title>
                        <Desc>DONT COMPROMISE ON STYLE GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <RiArrowRightSFill/>
            </Arrow>
        </Container>
    )
}

export default Slider
