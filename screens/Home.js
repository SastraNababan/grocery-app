import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,ScrollView} from 'react-native'
import {Header,Body,Container,Content,Footer,FooterTab, Button,Text,Title,Icon,Left,Right,Card} from 'native-base'
import {ListPanel,Swiper,SwiperProductThumb,Grid,GridProductThumb} from '../components'
const { width,height } = Dimensions.get('window')
import homeData from '../database/home'
import promo from '../database/promo'
import categories from '../database/categories'


export default class Home extends Component {
  state = {  }

  renderPromo(data){
    return (
      <ListPanel title="Promo" description="Today Promo">
        <Swiper>
        {
          data.map((item, idx) => {
            return <SwiperProductThumb key={idx} { ...item }/>
          })
        }
        </Swiper>
      </ListPanel>
    )
  }

  renderCategories(data){
    return (
      <ListPanel title="Categories" description="">
        <Grid>
          {
            data.map((item, id) => {
                return <GridProductThumb key={id} { ...item }/>
            })
          }
        </Grid>
      </ListPanel>
    )
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header searchBar rounded>
        <Left>
          <Button transparent>
          <Icon name="ios-menu"/>
          </Button>
        </Left>
        <Body>
        <Title>Grocery App</Title>
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
          {/* <View style={styles.slider}>
            <Text>Promo Slider</Text>
          </View> */}

            {/* <Button onPress={() => navigate('ShopScreen',{contact: 'contact123'})}>
              <Text>Test</Text>
            </Button> */}
          
          <ScrollView>
            <Card>
            {this.renderPromo(promo)}
            </Card>

            <Card>
            {this.renderCategories(categories)}
            </Card>
          </ScrollView>

        </Content>
        <Footer>
          <FooterTab>
            <Button active>
              <Icon name="ios-home"/>
              <Text>Home</Text>
            </Button>
            <Button>
              <Icon name="ios-cart"/>
              <Text>Cart</Text>
            </Button>
            <Button>
              <Icon name="ios-heart"/>
              <Text>Favorite</Text>
            </Button>
            <Button>
              <Icon name="ios-contact"/>
              <Text>Account</Text>
            </Button>
          </FooterTab>
      </Footer>
      </Container>

    )
  }
}

const styles =StyleSheet.create({
  slider :{
    flex:1,
    width:width,
    height:height/4,
    backgroundColor:"#CCC",
    alignItems:"center",
    justifyContent:"center"
  }
})