import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from './homepage/Home';
import { TodoScreen } from './todo/Todo'
import { HistoryScreen } from './history/History'
// import { TesScreen } from './tes/Tes'


const MainApp = createBottomTabNavigator(
    {
      Home: {screen: HomeScreen},
      Todo: {screen: TodoScreen},
      History: {screen: HistoryScreen},
      // Tes: {screen: TesScreen}
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({focused, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `home${focused ? '' : '-outline'}`;
          } else if (routeName === 'Todo') {
            iconName = `map-clock${focused ? '' : '-outline'}`;
          } else if (routeName === 'History') {
            iconName = `book${focused ? '' : '-outline'}`;
          // } else if (routeName === 'Tes') {
          //   iconName = `phone${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Icon name={iconName} size={28} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#00BFFF',
        inactiveTintColor: '#888888',
        style: {
          backgroundColor: 'white',
        },
      },
    },
  );
  
  export default MainApp;
  