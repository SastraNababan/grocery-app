import React, { Component } from 'react'
import { View,Image,StyleSheet } from 'react-native'
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
  CardItem,
  Form,
  Label,
  H3
} from 'native-base'
import {CheckoutStep} from '../components'
import theme from '../theme/variables'

export default class OrderSummaryScreen extends Component {
  state = {  }
  render() {
    const {navigate} = this.props.navigation;
    let picture = "http://res.cloudinary.com/oklae/image/upload/c_scale,w_300/v1507300098/grocery-app/promo/apple.jpg"
    
    return (
      <Container>
        <Header searchBar rounded hasTabs>
          <Left>
            <Button transparent onPress={ () => navigate('PaymentScreen')}>
             <Icon name="ios-arrow-round-back"/>
            </Button>
          </Left>
          <Body>
          <Title>Order Summary</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder>
          <CheckoutStep currentPosition={2}/>
          <Button onPress={ () => navigate('OrderSuccessScreen')} full style={{marginTop:20,marginBottom:20}}>
            <Text bold>Submit Order</Text>
            <Icon name="ios-arrow-round-forward"/>
          </Button>
        </Content>
      </Container>     
    )
  }
}

const styles = StyleSheet.create({
  StepIndicator:{
    backgroundColor:'#F1F1F1',
    padding:10
  }
})
