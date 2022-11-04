import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

`

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
    position: absolute;
`
const Image = styled.img`
z-index: 2;
height: 75%;`
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    align-items:center ;
    justify-content: center;
    display:flex;
    background-color: rgba(0,0,0,.3);
    opacity:0;
    transition: all .6s ease;
    ${Container}:hover & {
        
        opacity: 1;
    }
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all .2s ease;
    opacity: 1;
    &:hover{
        transform: scale(1.2);
        
    }
`

export default function Product(props) {
    return (

        <Container>
            <Circle />
            <Image src={props.item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>

    )
}