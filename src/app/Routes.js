import  { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

const Routes = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    },
);

export default createAppContainer(Routes);