import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Image } from 'react-native'
import {Container,
  Header,
  Content,
  Body,
  Text,
  H1,
  H3,
  Button,
  Tab,
  Tabs,
  Item,
  Icon,
  Input,
  Left,
  Right,
  Title,
  ScrollableTab,
  Footer,
  Spinner,
  Grid,
  Col
} from 'native-base'
import { connect } from 'react-redux';
import {sampleAction} from '../store/actions'
import {
  ProductGrid,
  FooterTab,
  QuantityInput
} from '../components'
import theme from '../theme/variables'
import products from '../database/products'
const {width, height, scale} = Dimensions.get("window")
const productWidth = (width - 45) 
const currencySymbol="$ "

class ProductScreen extends Component {
  state = {  }
  render() {
    const dim=Dimensions.get('screen')
    const {scale,height,width,fontScale} = dim
    const {navigate} = this.props.navigation;
    const {id,title,price,unitSize,picture,description} = this.props.navigation.state.params.product
    let priceDisplay = currencySymbol + price 
    if (unitSize != undefined){
      priceDisplay = priceDisplay + ' / ' + unitSize
    }
    console.log(picture);
    return (
      <Container>
        <Header searchBar rounded hasTabs>
          <Left>
            <Button transparent onPress={ () => navigate('DrawerOpen')}>
            <Icon name="ios-menu"/>
            </Button>
          </Left>
          <Body>
          <Title>Shop</Title>
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
        <Content padder light>
          <Image  
            source={{uri:picture}}
            style={styles.productImage} 
          /> 
          <H3 style={styles.productTitle}>{title}</H3>
          <Text style={styles.productTitle}>{priceDisplay}</Text>
          <QuantityInput 
            style={{flex:1}}
            min={2}
            max={6}
            initialValue={5}
            onChangeText={() => console.log('change')}
            styleTextInput={{fontSize:24}}
          />

          <Text style={styles.productDescription}>{description}</Text>
          
        </Content>
        {/* <Button><Text>Add to Cart</Text></Button> */}
            
        <Footer>
          <FooterTab/>
        </Footer>
      </Container>
      
    )
  }
}
const styles={
  productImage: {
    width: productWidth,
    height:productWidth,
    alignSelf:'center',
  },
  productTitle:{
    marginBottom:20
  },
  productDescription:{
  }
  
}

const mapStateToProps = state => ({
  sampleReducer: state.sampleReducer,
});

const mapDispatchToProps ={
  sampleAction,
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductScreen);
