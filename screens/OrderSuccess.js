import React, { Component } from 'react'
import { View,Image,StyleSheet,StatusBar } from 'react-native'
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
import theme from '../theme/variables'

export default class OrderSuccessScreen extends Component {
  state = {  }
  render() {
    const {navigate} = this.props.navigation;
    let picture = "http://res.cloudinary.com/oklae/image/upload/c_scale,w_300/v1507300098/grocery-app/promo/apple.jpg"
    
    return (
      <Container>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Header searchBar rounded hasTabs>
          <Left>
            <Button transparent onPress={ () => navigate('OrderSummaryScreen')}>
             <Icon name="ios-arrow-round-back"/>
            </Button>
          </Left>
          <Body>
          <Title>Order Success</Title>
          </Body>
          <Right/>
        </Header>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:10}}>
            <Image source={require('../assets/order-success-icon.png')} />
            <H3 style={{textAlign:'center',fontWeight:'bold',marginTop:20,marginBottom:20}}>Congratulation Your order is accepted.</H3>
            <Text style={{textAlign:'center'}}>We will send you notification when the goods delivered</Text>
            <Button style={{alignSelf:'center',marginTop:20}} onPress={ () => navigate('HomeScreen')}>
              <Text bold>Keep Shooping</Text>
            </Button>
          </View>
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
