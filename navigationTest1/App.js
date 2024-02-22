import React from 'react';
import { View, StyleSheet , Button, ScrollView} from 'react-native';
import Header from './component/redux/Header';
import  Product  from './component/redux/Product';


const App = () => {
    const products = [
        {
            name: 'samsung Mobile',
            color: 'Black',
            price: 30000,
            image: "https://png.pngitem.com/pimgs/s/248-2488107_wireless-charging-baseus-dual-wireless-charger-hd-png.png"
        }, 
        {
            name: 'Apple Mobile',
            color: 'Red',
            price: 150000,
            image: "https://w7.pngwing.com/pngs/392/320/png-transparent-apple-iphone-8-apple-iphone-7-plus-product-red-iphone-red-gadget-mobile-phone-case-mobile-phone-thumbnail.png"
        }, 
        {
            name: 'One Plus',
            color: 'Grey',
            price: 55000,
            image: "https://ongpng.com/wp-content/uploads/2023/04/10-35.png"
        },
        {
            name: 'Nokia',
            color: 'White',
            price: 55000,
            image: "https://welectronics.com/images/stories/virtuemart/product/NokiaC30wht.jpg"
        }
    ]
    return (
        <View style={styles.container}>
          <Header />
          <ScrollView>
            {
        products.map((item) => <Product  item={item}/>)
            }
            </ScrollView>


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default App;
