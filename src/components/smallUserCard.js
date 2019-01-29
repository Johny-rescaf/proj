import React, { Component } from 'react';
import { Card, Avatar } from 'antd';

class SmallUserCard extends Component {
    render(){
        return (
            <Card
            style={{ padding: '10px' }} >
            <p style={{width: '80%'}}>
              It is a long established fact 
              that a reader will be distracted by
              <a className="threeDot">...</a> 
            </p>
            <p style={{marginBottom: '0px'}}>
              <span className="bottomDate">09/55/21</span>
            <Avatar className="smallBottomImage" shape="square" size={30} icon="user" />
            </p>
          </Card>
        );
    }
}

export default SmallUserCard;