import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Image } from 'react-native'
import {Container,
  Header,
  Content,
  Body,
  Text,
  H1,
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
} from '../components'
import theme from '../theme/variables'
import database from '../database'

class ShopScreen extends Component {
  state = {  }
  render() {
    const dim=Dimensions.get('screen')
    const {scale,height,width,fontScale} = dim
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
        {/* <Content> */}
          <Tabs initialPage={0} style={{backgroundColor:theme.brandPrimary}} renderTabBar={()=> <ScrollableTab />}>
            <Tab heading={database.cat1.name}>
              {<ProductGrid products={database.cat1.products} navigate={navigate}/>}
            </Tab>
            <Tab heading={database.cat2.name}>
              {<ProductGrid products={database.cat2.products} navigate={navigate}/>}
            </Tab>
            <Tab heading={database.cat3.name}>
              {<ProductGrid products={database.cat3.products} navigate={navigate}/>}
            </Tab>
          </Tabs>  
          
         {/* </Content>  */}
         {/* <View style={{backgroundColor:"#FFF",padding:10,flex:1}}> */}
            {/* <Grid>
              <Col size={4}>
                <Button transparent>
                  <Icon name="logo-buffer"/>
                  <Text>Sort</Text> 
                </Button>
              </Col>
              <Col size={4}>
                <Button transparent>
                  <Icon name="ios-funnel"/>
                  <Text>Filter</Text> 
                </Button>
              </Col>
              <Col size={2}>
                <Button transparent>
                  <Icon name="logo-windows"/>
                </Button>
              </Col>
            </Grid> */}
          {/* </View> */}
       {/* <Footer>
          <FooterTab/>
        </Footer> */}
      </Container>
      
    )
  }
}
const styles={
  myStyle : {
    color:'red'
  },
  myStyle2 : {
    fontWeight:'bold',
    fontSize:20,
  }
}

const mapStateToProps = state => ({
  sampleReducer: state.sampleReducer,
});

const mapDispatchToProps ={
  sampleAction,
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopScreen);
