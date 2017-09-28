import React, { Component } from 'react'
import { View } from 'react-native'
import {Container,Header,Content,Body,Text,H1,Button} from 'native-base'

class OtherScreen extends Component {
  state = {  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header>
          <Body>
            <Text>Other Screen</Text>
          </Body>
        </Header>
        <Content padder>
          <H1>Another Screen </H1>
          <Text>With Redux,Nativebase, ReactNavigation</Text>
          <Button onPress={() => navigate('IndexScreen')}>
            <Text>Back to Index Screen</Text>
          </Button>
        </Content>
      </Container>
      
    )
  }
}

export default OtherScreen
