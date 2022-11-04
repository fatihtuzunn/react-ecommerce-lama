import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position: relative;
`
const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
${mobile({ height: "30vh" })}

`
const Info = styled.div`
position: absolute ;
top:50%;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction: column;
align-items: center;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`


const Button = styled.button`

border:none;
padding:10px;
background-color: white;
color: gray;
cursor:pointer;
font-weight: 600;
text-transform: uppercase;

`



export default function CategoryItem(props) {
    return (
        <Container>
            <Image src={props.item.img} />
            <Info>
                <Title>{props.item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>)
}