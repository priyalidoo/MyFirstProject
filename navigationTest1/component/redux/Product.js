import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native'; // Ensure all necessary components are imported
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';

const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    
  dispatch(addToCart(item))
  }

  return (
    <View style={styles.maincontainer}>
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.price}</Text>
      <Text style={styles.text}>{item.color}</Text>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer:{
    flex:1
  },
  container: {
    alignItems: 'center',
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    padding: 20,
    marginBottom: 50,
   
  },
  text: {
    fontSize: 20,
    paddingTop: 20,
  },
  image: {
    width: 200,
    height: 80,
    margin: 5,
  },
});

export default Product;