import React from 'react';
import 'bulma/css/bulma.min.css';
import { Container } from 'react-bulma-components';
import Item from './Item';

const ItemList = ({ productos }) => {
    return (
        <>
            <Container>
                {productos?.map(product => <Item key={product.id} product={product} />)}
            </Container>
        </ >
    )
}

export default ItemList
