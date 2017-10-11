import React, { Component } from 'react'
import {
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
} from 'native-base'

export default () => (
  <FooterTab>
    <Button>
      <Icon name="ios-home"/>
      <Text bold>Home</Text>
    </Button>
    <Button>
      <Icon name="ios-cart"/>
      <Text bold>Cart</Text>
    </Button>
    <Button>
      <Icon name="ios-heart"/>
      <Text bold>Favorite</Text>
    </Button>
    <Button>
      <Icon name="ios-contact"/>
      <Text bold>Account</Text>
    </Button>
  </FooterTab>
)
