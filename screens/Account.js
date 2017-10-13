import React, { Component } from 'react'
import { View,StyleSheet,Image } from 'react-native'
import { 
  Container,
  Content,
  Header,
  Text,
  Grid,
  Row,
  Tabs,
  ScrollableTab,
  Tab,
  TabHeading,
  Button,
  Left,
  Right,
  Icon,
  Body,
  Title
} from 'native-base'
import theme from '../theme/variables'
const logo = require("../assets/logo.png");
export default class AccountScreen extends Component {
  state = {  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={ () => navigate('HomeScreen')}>
            <Icon name="ios-arrow-round-back"/>
            </Button>
          </Left>
          <Body>
          <Title>Account</Title>
          </Body>
          <Right/>
        </Header>
        
        <View style={{flex:1}}>
          <Grid>
            <Row size={40}>
              <View style={styles.logoWrapper}>
                <Image square style={styles.logo} source={logo} />
              </View>
            </Row>
            
            <Row size={60}>
                <Tabs initialPage={0} style={{backgroundColor:theme.brandPrimary}} renderTabBar={()=> <ScrollableTab />}>
                  <Tab heading={ <TabHeading><Icon name="ios-person" /><Text>Signup</Text></TabHeading>}>
                    <View style={{padding:20}}>
                      <Button full rounded iconLeft style={{marginBottom:15}} onPress={()=> navigate('SignupScreen')}>
                        <Icon name="ios-mail"/>
                        <Text style={{fontWeight:'700'}}>Signup with Email</Text>
                      </Button>

                      <Button full rounded iconLeft style={{marginBottom:15,backgroundColor:'#3b5998'}}>
                        <Icon name="logo-facebook"/>
                        <Text style={{fontWeight:'700'}}>Signup with Facebook</Text>
                      </Button>

                      <Button full rounded iconLeft style={{marginBottom:15,backgroundColor:"#55acee"}}>
                        <Icon name="logo-twitter"/>
                        <Text style={{fontWeight:'700'}}>Signup with Twitter</Text>
                      </Button>

                      <Button full rounded iconLeft style={{marginBottom:15,backgroundColor:'#dd4b39'}}>
                        <Icon name="logo-google"/>
                        <Text style={{fontWeight:'700'}}>Signup with Twitter</Text>
                      </Button>


                    </View>
                  </Tab>
                  <Tab heading={ <TabHeading><Icon name="ios-lock-outline" /><Text>Login</Text></TabHeading>}>
                    <View style={{padding:20}}>
                      <Button full rounded iconLeft style={{marginBottom:15}} onPress={()=> navigate('LoginScreen')} >
                        <Icon name="ios-mail"/>
                        <Text style={{fontWeight:'700'}}>Login with Email</Text>
                      </Button>
                      <Button full rounded iconLeft style={{marginBottom:15,backgroundColor:'#3b5998'}}>
                        <Icon name="logo-facebook"/>
                        <Text style={{fontWeight:'700'}}>Login with Facebook</Text>
                      </Button>

                      <Button full rounded iconLeft style={{marginBottom:15,backgroundColor:"#55acee"}}>
                        <Icon name="logo-twitter"/>
                        <Text style={{fontWeight:'700'}}>Login with Twitter</Text>
                      </Button>

                      <Button full rounded iconLeft style={{marginBottom:15,backgroundColor:'#dd4b39'}}>
                        <Icon name="logo-google"/>
                        <Text style={{fontWeight:'700'}}>Login with Twitter</Text>
                      </Button>


                    </View>
                  </Tab>
                </Tabs> 
              
            </Row>
          </Grid>
        </View>

      </Container>
    )
  }
}

const styles=StyleSheet.create({
  logo:{
    width: 100,
    height: 81,
  },
  logoWrapper:{
    flex:1,
    backgroundColor:'#29c137',
    justifyContent:'center',
    alignItems:'center'
  }
})
