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
  Row,
  Col,
  Card,
  CardItem
} from 'native-base'

import {QuantityInput} from '../components' 
const picture = "http://res.cloudinary.com/oklae/image/upload/c_scale,w_300/v1507300098/grocery-app/promo/apple.jpg"


const CartItem = ()=> (
  <View style={{backgroundColor:"#FFF",marginBottom:5}}>
  <Grid style={{padding:10}}>
    <Col size={3} style={{justifyContent:"center"}}>
      <Image source={{uri:picture}} style={{width:80,height:80}} />
    </Col>
    <Col size={7} style={{justifyContent:"center"}}>
      <Text>Olivia Burton Exclusive Floral Big Dial Watch </Text>
      <Text note> 1kg (approx 6 to 7 nos ) </Text>
      <Row style={{marginTop:10}}>
        <Col> 
          <Text style={{marginTop:5,fontWeight:'700'}}>$20</Text>
        </Col>
        <Col style={{alignItems:'flex-end'}}>
          <QuantityInput 
            orientation="horizontal"
            initialValue={0}
            styleTextInput={{backgroundColor:"transparent",width:25}}
            styleButton={{alignItems:"center",borderRadius:50,padding:10}}
            onChangeText={() => console.log('cart update')}
            styleImage={{width:10,height:10}}
          />
        </Col>
      </Row>
    </Col>
  </Grid>
  </View>
)

export default class CartScreen extends Component {
  state = {  }
  render() {
    const {navigate} = this.props.navigation;
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
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </Content>
        <View style={{backgroundColor:"#FFF",padding:8}}>
          <Text style={{textAlign:'center',fontWeight:'700'}}>4 Items / Total Cost $ 1234</Text>
        </View>
        <Button onPress={() => navigate('CheckoutScreen')} success full><Text>Checkout</Text></Button>
      </Container>     
    )
  }
}
