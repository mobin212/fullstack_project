import React from 'react'
import styled from 'styled-components'
import {AiFillFacebook,AiOutlineInstagram,AiFillTwitterCircle,AiFillPhone,AiFillMail} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'

const Container = styled.div`
    display: flex;
    justify-content: center;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${item=>item.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    font-size: 1.5em;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title=styled.h3`
    margin-bottom: 30px;
`;
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem= styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem= styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
    return (
        <Container>
            <Left style={{marginLeft:'40px'}}>
                <Logo>LAMA</Logo>
                <Desc>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Odit ipsam eaque ut assumenda cupiditate pariatur, 
                     quaerat earum non aspernatur illo, dolorum nulla, 
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3b5999'>
                        <AiFillFacebook/>
                    </SocialIcon>
                    <SocialIcon color='e4405f'>
                        <AiOutlineInstagram/>
                    </SocialIcon>
                    <SocialIcon color='55acee'>
                        <AiFillTwitterCircle/>
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center style={{marginLeft:'40px'}}>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fation</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Accoun</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right style={{marginLeft:'40px'}}>
                <Title>Contact</Title>
                <ContactItem><FaMapMarkerAlt style={{marginRight:'10px'}}/>622 Dixie path  South Tobinchester</ContactItem>
                <ContactItem><AiFillPhone style={{marginRight:'10px'}}/>0918 ***** 80</ContactItem>
                <ContactItem><AiFillMail style={{marginRight:'10px'}}/>hjk@gmail.com</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
