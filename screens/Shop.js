import React, { Component } from 'react'
import { View,StyleSheet,Dimensions } from 'react-native'
import {Container,Header,Content,Body,Text,H1,Button,Tab, Tabs,ScrollableTab,Item,Icon,Input,Left,Right,Title} from 'native-base'
import { connect } from 'react-redux';
import {sampleAction} from '../store/actions'
import ProductList from '../components/ProductList'
import products from '../database/products'
import Tab1 from '../screens/Tab1'
import Tab2 from '../screens/Tab2'
import axios from 'axios'


class ShopScreen extends Component {
  state = {  }
  // static navigationOptions = ({ navigation }) => ({
  //   title: `Chat with ${navigation.state.contact}`,
  // });
  componentWillMount() {
    const { state} = this.props.navigation;
    contact = state.params.contact;
  //  console.log(state)
   console.log(contact)
  }
  render() {
    // console.log(Dimensions);
    const dim=Dimensions.get('screen')
    const {scale,height,width,fontScale} = dim
    console.log(scale,width,height,fontScale);
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header searchBar rounded>
          <Left>
            <Button transparent>
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
          
          {/* <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
           
          </Item> */}
          
          {/* <Body>
            <Icon name="ios-cart"/>
          </Body> */}
          {/* <Body>
          </Body> */}
        </Header>
        <Content >
          <Tabs initialPage={0} renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Fresh Fruites">
              <ProductList products={products}/>
            </Tab>
            <Tab heading="Kitchen Products">
              <Tab2 />
            </Tab>
            <Tab heading="Kids and Mom">
              <Tab1 />
            </Tab>
          </Tabs>
          {/* <ProductList products={products}/> */}
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