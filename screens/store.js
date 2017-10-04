import React, { Component } from 'react'
import { View,StyleSheet,Dimensions } from 'react-native'
import {Container,Header,Content,Body,Text,H1,Button,Tab, Tabs,ScrollableTab} from 'native-base'
import { connect } from 'react-redux';
import {sampleAction} from '../store/actions'
import ProductList from '../components/ProductList'
import products from '../data/products'
import Tab1 from '../screens/Tab1'
import Tab2 from '../screens/Tab2'



class StoreScreen extends Component {
  state = {  }

  render() {
    // console.log(Dimensions);
    const dim=Dimensions.get('screen')
    const {scale,height,width,fontScale} = dim
    console.log(scale,width,height,fontScale);
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header hasTabs>
          <Body>
            <Text>Store</Text>
          </Body>
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
export default connect(mapStateToProps,mapDispatchToProps)(StoreScreen);