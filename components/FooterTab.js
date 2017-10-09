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
)
