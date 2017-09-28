import React, { Component } from 'react'
import { View } from 'react-native'
import {Container,Header,Content,Body,Text,H1,Button} from 'native-base'
import { connect } from 'react-redux';
import {sampleAction} from '../store/actions'

class IndexScreen extends Component {
  state = {  }

  testAction(){
    // this.props.dispatch(sampleAction())
    this.props.sampleAction()
    
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header>
          <Body>
            <Text>Index Screen</Text>
          </Body>
        </Header>
        <Content padder>
          <H1>React Native Starter Kit </H1>
          <Text>With Redux,Nativebase, ReactNavigation</Text>
          <Button onPress={() => navigate('OtherScreen')}>
            <Text>Goto Next Screen</Text>
          </Button>
          <Button success onPress={() => this.testAction()}>
            <Text>Test Action</Text>
          </Button>
        </Content>
      </Container>
      
    )
  }
}


const mapStateToProps = state => ({
  sampleReducer: state.sampleReducer,
});

const mapDispatchToProps ={
  sampleAction,
}
// export default connect(mapStateToProps)(IndexScreen);
export default connect(mapStateToProps,mapDispatchToProps)(IndexScreen);