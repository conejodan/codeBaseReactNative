import React, { Component } from 'react';
import {Container, Header, Body, Title, Icon, Left, Button, Fab, Drawer, Right} from 'native-base';
import SideBar from './SideBar';

class HeaderContent extends Component{
    state = {active: false}

    closeDrawer = () => {
        this.drawer._root.close()
      };
      openDrawer = () => {
        this.drawer._root.open()
      };
      
    render(){
        return(
            <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
            <Container>
        <Header>
        <Left style={{ flex: 1 }} >
            <Button transparent onPress={ () => this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
        <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
          <Title>Dashboard</Title>
        </Body>
        <Right style={{ flex: 1 }}>
        </Right>
      </Header>
      {this.props.children}
      </Container>
      </Drawer>
        );
    }
}

export default HeaderContent;