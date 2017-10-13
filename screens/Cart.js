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

import {QuantityInput} from '../components' 

export default class CartScreen extends Component {
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
          <Title>Cart</Title>
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
          <Grid style={{backgroundColor:"#F1F1F1",padding:8,marginBottom:15}}>
            <Col>
              <Text>Total Price</Text>
            </Col>
            <Col>
              <Text>$32.5</Text>
            </Col>
          </Grid>

          <Card>
            <CardItem>
              <Body>
                <Grid>
                  <Col size={2} style={{justifyContent:"center"}}>
                     <Image source={{uri:picture}} style={{width:80,height:80}} />
                  </Col>
                  <Col size={5} style={{justifyContent:"center"}}>
                    <Text> Gala Apples </Text>
                    <Text note> Gala Apples </Text>
                    <Text style={{marginTop:5,fontWeight:'700'}}>$20</Text>
                  </Col>
                  <Col size={2} style={{justifyContent:"center",alignItems:'center'}}>
                      <QuantityInput 
                        orientation="vertical"
                        initialValue={0}
                        styleTextInput={{backgroundColor:"transparent",width:35}}
                        styleButton={{alignItems:"center",borderRadius:50,padding:10}}
                        onChangeText={() => console.log('cart update')}
                      />
                  </Col>
                </Grid>
              </Body>
            </CardItem>
          </Card>
 
        </Content>
        <Button success full><Text>Checkout</Text></Button>
      </Container>     
    )
  }
}
