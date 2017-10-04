import React, { Component } from 'react';
import { View,FlatList,Image,Dimensions,StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text,Thumbnail,Button,Icon,Left,Right } from 'native-base';
import ResponsiveImage from 'react-native-responsive-image';
import FitImage from 'react-native-fit-image'

const {width, height, scale} = Dimensions.get("window"),
vw = width / 100,
vh = height / 100,
vmin = Math.min(vw, vh),
vmax = Math.max(vw, vh);

class ProductList extends Component {
  // state = {selected: (new Map(): Map<string, boolean>)};
  _renderItem = (item) =>(<ProductItem post={item}  />)
  _keyExtractor = (item,index) => item.id
  
  render() {
    return (
     <View>
      <FlatList
        data={_.values(this.props.products)}
        numColumns={2}
        horizontal={false}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        extraData={this.state}
      />
     </View> 
    );
  }
}

export default ProductList;


class ProductItem extends React.PureComponent {
  state ={
    featuredImage :'',
    categoryName:'cat',

  }
  
  componentDidMount() {
     featuredMedia_id=this.props.post.item.featured_media
     this.setState({
      categoryName:'change'
     })
  }

  _onPress = () => {
    // this.props.onPressItem(this.props.id);
  };

  render() {
    const {title,price,picture}=this.props.post.item
    return (
    <Card transparent  style={{flex: 1}}>
      <CardItem>
        <Body>
          {/* source={{uri: 'http://urbanintel.com.au/wp-content/uploads/2015/03/placeholder-square.jpg',isStatic:true}}  */}
          {/* source={require('../assets/placeholder.png')} */}
          {/* <ResponsiveImage source={{uri: picture}} initWidth="180" initHeight="180"/> */}
          {/* <FitImage
            source={{ uri: picture }}
            style={styles.fitImage}
            originalWidth={400}
            originalHeight={400}
            resizeMode="contain"
          /> */}
          <Image  
          source={{uri:picture}}
          style={styles.productItem} /> 
          <Text style={styles.productTitle}>{title}</Text>
          <Text style={styles.productPrice}>{price}</Text>
        </Body>
      </CardItem>
    </Card>
      
    )
  }
}

var styles = StyleSheet.create({
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
  productItem: {
    width: 160,
    height:160,
    alignSelf:'center',
  },
  productTitle:{
    fontWeight:'700',
  },
  productPrice:{

  }
});
 