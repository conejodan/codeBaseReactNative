import React, {Component} from 'react';
import {View} from 'react-native';
import { Container, Header, Body, Title, Content, Form,Item,Input, Button, Text } from 'native-base';

class LoginForm extends Component{
    render(){
        return(
            <Container>
        <Header>
        <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
          <Title>Login</Title>
        </Body>
      </Header>
      <Content>
          <Form>
            <Item>
              <Input placeholder="Usuario" />
            </Item>
            <Item last>
              <Input placeholder="Contraseña" />
            </Item>
            <Button block>
            <Text>Ingresar</Text>
          </Button>
          </Form>
        </Content>
      </Container>
        );
    }
}

export default LoginForm;