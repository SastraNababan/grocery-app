import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Image,ScrollView } from 'react-native'
import {Container,Header,Content,Body,Text,H1,Button,Tab, Tabs,ScrollableTab,Item,Icon,Input,Left,Right,Title} from 'native-base'
import { connect } from 'react-redux';
import {sampleAction} from '../store/actions'
import ProductGrid from '../components/ProductGrid'
import products from '../database/products'
import Tab1 from '../screens/Tab1'
import Tab2 from '../screens/Tab2'
import {promo,categories} from '../database'

class ShopScreen extends Component {
  state = {  }
 
  renderCategoriesTab(categories){
    return (
      categories.map((category,index) => (
        <Tab key={index} heading={category.name}>
          <ProductGrid products={products}/>
        </Tab>
      ))
    )
  }

  render() {
    const dim=Dimensions.get('screen')
    const {scale,height,width,fontScale} = dim
    // console.log(scale,width,height,fontScale);
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
        <Content>
          <Tabs initialPage={0} renderTabBar={()=> <ScrollableTab />}>
            {this.renderCategoriesTab(categories)}
          </Tabs>
          {/* <ScrollView horizontal={true}>
            <Button light>
              <Icon name="ios-cart"/>
              <Text>Category 1</Text>
            </Button>
            <Button><Text>Category 2</Text></Button>
            <Button><Text>Category 3</Text></Button>
            <Button><Text>Category 4</Text></Button>
            <Button><Text>Category 5</Text></Button>
          </ScrollView> */}



          <ProductGrid products={products}/>
        </Content>
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
// export default connect(mapStateToProps)(IndexScreen);
export default connect(mapStateToProps,mapDispatchToProps)(ShopScreen);
