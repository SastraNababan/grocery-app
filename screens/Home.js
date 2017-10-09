import React, {Component} from 'react'
import {View, StyleSheet, Dimensions, ScrollView,Image} from 'react-native'
import { DrawerNavigator } from 'react-navigation';
import {
  Header,
  Body,
  Container,
  Content,
  Footer,
  Button,
  Text,
  Title,
  Icon,
  Left,
  Right,
  Card
} from 'native-base'

import {
  FooterTab,
  Panel,
  Swiper,
  SwiperProductThumb,
  Grid,
  GridProductThumb
} from '../components'

import {promo,categories} from '../database'

const {width, height} = Dimensions.get('window')
const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    {/* <SampleText>{banner}</SampleText> */}
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open drawer"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);
 

export default class Home extends Component {
  state = {}
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name='ios-cart'></Icon>
    ),
  };

  renderPromo(data) {
    const {navigate} = this.props.navigation
    return (
      <Panel
        title="Promo"
        description="Today Promo"
        onPressSeeAll={() => navigate('ShopScreen')}>
        <Swiper>
          {data.map((item, idx) => {
            return <SwiperProductThumb key={idx} { ...item }/>
          })
          }
        </Swiper>
      </Panel>
    )
  }

  renderCategories(data) {
    return (
      <Panel title="Categories" description="">
        <Grid>
          {data.map((item, id) => {
            return <GridProductThumb key={id} { ...item }/>
          })
          }
        </Grid>
      </Panel>
    )
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <Container>
        <Header searchBar rounded>
          <Left>
            <Button transparent onPress={ () => navigate('DrawerOpen')}>
              <Icon name="ios-menu"/>
            </Button>
          </Left>
          <Body>
            <Title>Grocery UI</Title>
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
          <View style={styles.sliderHolder}>
            {/* <Text>Promo Slider</Text> */}
            <Image style={styles.sliderPicture}  source={{ uri: "http://res.cloudinary.com/oklae/image/upload/c_scale,w_500/v1507343728/grocery-app/slider/slider1.png"}}/>
          </View>

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
          <FooterTab/>
        </Footer>
      </Container>

    )
  }
}

const styles = StyleSheet.create({
  sliderHolder: {
    // flex:1,
    width: width,
    height: height / 3,
    // backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center"
  },
  sliderPicture:{
    width: width,
    height: height / 3,
  }
})
