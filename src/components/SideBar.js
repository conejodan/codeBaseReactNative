import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import {Container, Content} from 'native-base';

class SideBar extends Component{
    render(){
        return (
            <Container>
            <Content style={{backgroundColor:'#FFFFFF'}}>
            <Image
            source={{
              uri: "https://raw.githubusercontent.com/nitin42/native-base-theme-plugin/master/Group.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
          
          </Image>
                <Text>Drawer</Text>
          </Content>
          </Container>
        );
    }
}

export default SideBar;