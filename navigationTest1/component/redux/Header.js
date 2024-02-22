import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartData = useSelector((state) => state.reducer);

  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View>
      <Text style={styles.text}>{cartItems}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'right',
    padding: 10,
    color: 'black',
    backgroundColor: 'orange'
  },
});

export default Header;

