import React, { Component } from 'react';
import { Card, Button } from 'antd';

class SmallCardButton extends Component {
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
            <Button style={{width: "60%"}} type="primary">Invite</Button>
            </p>
          </Card>
        );
    }
}

export default SmallCardButton;