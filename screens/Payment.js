import React, { Component } from 'react'
import { View,Image,StyleSheet,ScrollView,Dimensions,TouchableOpacity } from 'react-native'
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
import {CheckoutStep,Swiper} from '../components'
import theme from '../theme/variables'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

const PaymentGateway = (props) => {
  console.log(props.active);
  if (props.active){
    boxStyle={borderColor:'#29c137',borderWidth:2}
    title={ fontWeight:"700"}
  }else{
    boxStyle={ borderColor:'#CCC'}
    title={ fontWeight:"300"}
  }
  return (
  <TouchableOpacity style={[styles.paymentBox,boxStyle]}>
    <Image style={styles.paymentBoxLogo} source={props.logo} />
    <Text style={[styles.paymentBoxTitle,title]}>{props.title}</Text>
  </TouchableOpacity>
  )
}
const PaymentTab = () => {
 return (
     <Swiper>
       <PaymentGateway title="Credit Card" logo={require('../assets/credit-card.png')} active={true}/>
       <PaymentGateway title="Paypal" logo={require('../assets/paypal.png')}/>
       <PaymentGateway title="COD" logo={require('../assets/cash.png')}/>
     </Swiper>
 ) 
}

export default class PaymentScreen extends Component {
  state = {  }
  
  onChange(){

  }
  render() {
    const {navigate} = this.props.navigation;
    let picture = "http://res.cloudinary.com/oklae/image/upload/c_scale,w_300/v1507300098/grocery-app/promo/apple.jpg"
    
    return (
      <Container>
        <Header searchBar rounded hasTabs>
          <Left>
            <Button transparent onPress={ () => navigate('CheckoutScreen')}>
              <Icon name="ios-arrow-round-back"/>
            </Button>
          </Left>
          <Body>
          <Title>Payment</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder>
          <CheckoutStep currentPosition={1}/>
          <Card style={{borderWidth:0,borderColor:'transparent'}}>
            <CardItem header>
              <H3>Payment Method</H3>
            </CardItem>
            
            <PaymentTab/>
            
            <View style={{padding:10,marginBottom:20}}>
              <CreditCardInput onChange={this._onChange} />
            </View>
          </Card>  
          
          <Button onPress={ () => navigate('OrderSummaryScreen')} full style={{marginTop:20,marginBottom:20}}>
            <Text bold>Next</Text>
            <Icon name="ios-arrow-round-forward"/>
          </Button>
        </Content>
      </Container>     
    )
  }
}

const {width} = Dimensions.get('window')
const paymentBox = (width - 45) / 2.5

const styles = StyleSheet.create({
  StepIndicator:{
    backgroundColor:'#F1F1F1',
    padding:10
  },
  paymentBox:{
    borderColor:"#CCC",
    borderWidth:1,
    padding:10,
    margin:5,
    marginBottom:20,
    alignItems:'center',
    width:paymentBox,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3
  },
  paymentBoxLogo:{
    marginBottom:10
  },
  paymentBoxTitle:{
    
  }

})
