import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
`

export default function Products() {
    return (

        <Container>
            {popularProducts.map((item) => {
                return (
                    <Product item={item} />
                )
            })}
        </Container>

    )
}