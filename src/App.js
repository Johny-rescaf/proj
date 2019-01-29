import React, { Component } from 'react';
import { Card, Avatar, Row, Col, Button, Icon } from 'antd';
import SmallCardButton from './components/SmallCardButton';
import SmallUserCard from './components/smallUserCard';
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Row gutter={32} style={{ background: '#ECECEC', padding: '13px', margin: '30px' }}>
          <a className="BigThreeDot">
            <Icon type="up" />
          </a>
          <p className="CardHeaderContent">
            <Avatar style={{ marginTop: "-17px" }} className="largeCard" shape="square" size={40} icon="user" />
            <p className="inlineP" style={{ marginBottom: "0px" }}>
              <span style={{ fontWeight: "bold" }}>Adventurer Game</span>
              <p style={{ marginBottom: "0px", fontSize: "12px", fontWeight: "bold", color: "#666" }}>
                It is a long established fact that a reader will be distracted by the readable content of a page
            </p>
            </p>
          </p>

          <Col sm={12} md={6}>
            <SmallUserCard />
          </Col>

          <Col sm={12} md={6}>
            <SmallUserCard />
          </Col>

          <Col sm={12} md={6}>
            <SmallUserCard />
          </Col>

          <Col sm={12} md={6}>
            <SmallUserCard />
          </Col>

        </Row>
        <Row gutter={32} style={{ background: '#ECECEC', padding: '13px', margin: '30px'}}>
        <a className="BigThreeDot">
          <Icon type="up" />
        </a> 
        <p className="CardHeaderContent">
          <Avatar style={{marginTop: "-17px"}} className="largeCard" shape="square" size={40} icon="user" />
          <p className="inlineP" style={{marginBottom: "0px"}}>
            <span style={{fontWeight: "bold"}}>Adventurer Game</span>
            <p style={{marginBottom:"0px", fontSize: "12px", fontWeight: "bold", color: "#666"}}>
              It is a long established fact that a reader will be distracted by the readable content of a page
            </p>
          </p>
        </p>

    </Row>
    <Row gutter={32} style={{ background: '#ECECEC', padding: '13px', margin: '30px'}}>
        <a className="BigThreeDot">
          <Icon type="up" />
        </a> 
        <p className="CardHeaderContent">
          <Avatar style={{marginTop: "-17px"}} className="largeCard" shape="square" size={40} icon="user" />
          <p className="inlineP" style={{marginBottom: "0px"}}>
            <span style={{fontWeight: "bold"}}>Adventurer Game</span>
            <p style={{marginBottom:"0px", fontSize: "12px", fontWeight: "bold", color: "#666"}}>
              It is a long established fact that a reader will be distracted by the readable content of a page
            </p>
          </p>
        </p>

        <Col sm={12} md={6}>
         <SmallUserCard />
        </Col>

        <Col sm={12} md={6}>
          <SmallUserCard />
        </Col>

        <Col sm={12} md={6}>
          <SmallCardButton />
        </Col>

        <Col sm={12} md={6}>
          <SmallCardButton />
        </Col>

    </Row>
    <Row gutter={32} style={{ background: '#ECECEC', padding: '10px', margin: '30px'}}>
        <a className="BigThreeDot">
          <Icon type="up" />
        </a> 
        <p className="CardHeaderContent">
          <Avatar style={{marginTop: "-17px"}} className="largeCard" shape="square" size={40} icon="user" />
          <p className="inlineP" style={{marginBottom: "0px"}}>
            <span style={{fontWeight: "bold"}}>Adventurer Game</span>
            <p style={{marginBottom:"0px", fontSize: "12px", fontWeight: "bold", color: "#666"}}>
              It is a long established fact that a reader will be distracted by the readable content of a page
            </p>
          </p>
        </p>
        <Col sm={12} md={6}>
          <SmallCardButton />
        </Col>
        <Col sm={12} md={6}>
          <SmallCardButton />
        </Col>
        <Col sm={12} md={6}>
          <SmallCardButton />
        </Col>
    </Row>
      </div>

    );
  }
}

export default App;
