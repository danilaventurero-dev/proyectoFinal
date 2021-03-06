import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from './componentes/privateRoute/privateRoute';
import store from './store';
import Home from './views/home' ;
import login from './views/login' ;
import registro from './views/Registro' ;
import userList from './views/userList' ;
import articuloList from './views/articuloList' ;
import articulo from './views/articulo';
import detalleArticulo from './views/detalleArticulo';
import Menu from './componentes/nav';
//import Login from './views/login' ;
import{Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Container className="themed-container" fluid={true}> 
        <Row>
          <Col sm="2" >
            <Menu />
          </Col>  
          <Col sm="10">
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={login} />
            <Route path="/registro" exact component={registro} />
            <Route path="/articulo/:id" exact component={detalleArticulo} />
            <PrivateRoute path="/articuloList" exact component={articuloList} />
            <PrivateRoute path="/userList" exact component={userList} />
            <PrivateRoute path="/articulo" exact component={articulo} />
          </Col>
        </Row>
      </Container>
      </Router>
    </Provider>
  );
}

export default App;