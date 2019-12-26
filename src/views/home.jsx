import React, {useEffect} from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import {connect,useDispatch} from 'react-redux';
import Card  from '../componentes/card';
import { Container, Col, Row } from 'reactstrap';
import { getActionsAsyncCreator as getAll } from '../store/modules/articulos/getArticulos.action';

const Articulos = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    const {
        items,
    } = props;
    

    return (
        <Container >
            <Row>
            {items.map(item => (
                
               <Col key={item.id}  sm={{ size: '4', offset: 2 }}>
               
                    <Card dispatch={dispatch} items={item} />
                   
                </Col>
             ))}
             </Row>
        </Container>
    );
};

// simplemente se retorna la parte de los items al componente
const mapStateToProps = state => state.articulos.items;

export default connect(
    mapStateToProps
)(Articulos);