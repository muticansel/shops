import { createAppContainer, createStackNavigator } from 'react-navigation';
import{ Platform } from 'react-native';

import ProductsOverview from '../screens/shop/ProductsOverview';
import Colors from '../constants/colors';

const ProductNavigator = createStackNavigator({
    ProductsOverview: ProductsOverview
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(ProductNavigator);