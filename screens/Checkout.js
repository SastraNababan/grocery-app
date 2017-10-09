import React, { Component } from 'react'
import { View,Image } from 'react-native'
import {Container,
  Header,
  Content,
  Body,
  Text,
  H1,
  Button,
  Tab,
  Tabs,
  ScrollableTab,
  Item,
  Icon,
  Input,
  Left,
  Right,
  Title,
  Footer,
  Grid,
  Col,
  Card,
  CardItem
} from 'native-base'

 

export default class CheckoutScreen extends Component {
  state = {  }
  render() {
    const {navigate} = this.props.navigation;
    let picture = "http://res.cloudinary.com/oklae/image/upload/c_scale,w_300/v1507300098/grocery-app/promo/apple.jpg"
    
    return (
      <Container>
        <Header searchBar rounded hasTabs>
          <Left>
            <Button transparent onPress={ () => navigate('DrawerOpen')}>
            <Icon name="ios-menu"/>
            </Button>
          </Left>
          <Body>
          <Title>Checkout</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="ios-search"/>
            </Button>
            <Button transparent>
              <Icon name="ios-cart"/>
            </Button>
          </Right>
        </Header>
        <Content padder>
 
        </Content>
        
      </Container>     
    )
  }
}
