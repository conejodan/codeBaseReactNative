import React, { Component } from 'react';
import {Container, Header, Body, Title, Icon, Left, Button, Fab, Drawer} from 'native-base';
import SideBar from './SideBar';
import HeaderContent from './HeaderContent';

class Dashboard extends Component{
    state = {active: false}

    render(){
        

        return(
            <HeaderContent>
      <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
      </HeaderContent>
        );
    }
}

export default Dashboard;