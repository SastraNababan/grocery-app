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
  Col,
  Card
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
    // const {id,title,price,unitSize,picture,description} = this.props.navigation.state.params.product

    let title ="Granny Smith Apple"
    let price ="123"
    let unitSize ="kg"
    let picture ="http://res.cloudinary.com/oklae/image/upload/c_scale,w_300/v1507684059/shopping_cart1600_wnscp9.png"
    let description ="Archidendron pauciflorum, commonly known as Djenkol, Jenkol or Jering is a speci" +
    "es of flowering tree in the pea family, Fabaceae. It is native to Southeast Asia" +
    ", where the seeds are a popular dish."

    let priceDisplay = currencySymbol + price 
    if (unitSize != undefined){
      priceDisplay = priceDisplay + ' / ' + unitSize
    }

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
        <Content padder >
          <View style={styles.productPictureWrapper}>
          
            <Image  
              source={{uri:picture}}
              style={styles.productImage} 
            /> 
          </View>
            <H3 style={styles.productTitle}>{title}</H3>
            <Text style={styles.productPrice}>{priceDisplay}</Text>
            
            
            <Text style={styles.productDescription}>{description}</Text>
          
        </Content>
        <QuantityInput 
              style={{flex:1}}
              min={2}
              max={6}
              initialValue={0}
              onChangeText={() => console.log('change')}
              styleTextInput={{fontSize:20,backgroundColor:"#68D572",padding:10}}
              styleButton={{backgroundColor:"#29C137"}}
              styleWrapper={{padding:5}}

            />
        {/* <Button><Text>Add to Cart</Text></Button> */}
            
        <Footer>
          <FooterTab/>
        </Footer>
      </Container>
      
    )
  }
}
const styles={
  productPictureWrapper:{
    // borderWidth:1,
    // borderColor:"#CCC",
    // marginBottom:20
  },
  productImage: {
    width: productWidth,
    height:productWidth,
    alignSelf:'center',
  },
  productTitle:{
    // marginBottom:20
  },
  productPrice:{
    marginBottom:20
  },
  productDescription:{
    marginTop:20,
    marginBottom:20
  }
  
}

const mapStateToProps = state => ({
  sampleReducer: state.sampleReducer,
});

const mapDispatchToProps ={
  sampleAction,
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductScreen);
