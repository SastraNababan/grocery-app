import React, { Component } from 'react'
import { View,StatusBar,Image,StyleSheet } from 'react-native'
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Title,
  Right,
  Button,
  Icon,
  Grid,
  Row,
  Text,
  Form,
  Item,
  Input,
  Label,
  H2
} from 'native-base'

const logo = require("../assets/logo.png");

export default class SignupScreen extends Component {
  state = { 
    securePassword : true
   }
  
 
  changePasswordSecure(){
    securePassword=this.state.securePassword
    this.setState({securePassword : !securePassword})
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header searchBar rounded hasTabs>
          <Left>
            <Button transparent onPress={ () => navigate('AccountScreen')}>
            <Icon name="ios-arrow-round-back"/>
            </Button>
          </Left>
          <Body>
          <Title>Signup</Title>
          </Body>
          <Right/>
        </Header>
           <Grid>
             <Row size={25}>
                <View style={styles.logoWrapper}>
                  <Image square style={styles.logo} source={logo} />
                </View>
             </Row>
             <Row size={75}>
                <View style={styles.formWrapper}>
                  <H2 style={styles.formTitle}>Hi! Please Signup Below! </H2>
                  <Form>
                    <Item style={{marginBottom:15}}>
                      <Input placeholder="First Name" autoFocus={true}
                      />
                    </Item>

                    <Item style={{marginBottom:15}}>
                      <Input placeholder="Last Name" ref={(input) => {this.textInput=input}}/>
                    </Item>

                    <Item style={{marginBottom:15}}>
                      <Input placeholder="Email Address" keyboardType="email-address"/>
                    </Item>

                    <Item  last>
                      <Input placeholder="Create Password" secureTextEntry={this.state.securePassword}/>
                      <Button dark transparent 
                        onPress={()=> this.changePasswordSecure()}>
                        <Icon active name='ios-eye' />
                      </Button>
                    </Item>

                    <Button full style={{marginTop:25}}>
                      <Text style={{fontWeight:'700'}} >Sign Up</Text>
                    </Button>

                  </Form>
                </View>
             </Row>
           </Grid>

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
  },
  formWrapper:{
    padding:20,
    flex:1
  },
  formTitle:{
    textAlign:"center",
    marginBottom:20,
    color:"#828282"
  }

})
