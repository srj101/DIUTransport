import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Home from '../screens/Student/Home';
import MyMap from '../screens/Student/MyMap';
import Profile from '../screens/Student/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'react-native-paper';
import NoticeBoard from '../screens/NoticeBoard';
import BusDetails from '../screens/Student/BusDetails';
import BusList from '../components/Home/BusList';
import ViewAll from '../screens/Student/ViewAll';
import TicketHistory from '../screens/Student/TicketHistory';
import TicketDetails from '../screens/Student/TicketDetails';
import Tickets from '../screens/Student/Tickets';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BusDetails"
        component={BusDetails}
        options={({ route }) => ({
          title: route.params?.busId,
        })}
      />
      <Stack.Screen
        name="BusList"
        component={BusList}
        options={({ route }) => ({
          title: route.params?.routeId,
        })}
      />
      <Stack.Screen name="Routes" component={ViewAll} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile7"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TripHistory"
        component={TicketHistory}
        options={{ title: 'History' }}
      />
      <Stack.Screen
        name="Tickets"
        component={TicketStack}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="ios-pricetags" size={size} color={color} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const TicketStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Your Tickets" component={Tickets} />
      <Stack.Screen
        name="TicketDetails"
        component={TicketDetails}
        options={({ route }) => ({
          title: route.params?.value,
        })}
      />
    </Stack.Navigator>
  );
};

const StudentTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.accent,
        },
        tabBarInactiveTintColor: theme.colors.tabInactiveColor,
        tabBarActiveTintColor: theme.colors.tabActiveColor,
      }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: theme.colors.accent,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="mymap"
        component={MyMap}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="notices"
        component={NoticeBoard}
        options={{
          tabBarBadge: 7,
          tabBarBadgeStyle: { backgroundColor: 'tomato' },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="StuduentProfile"
        component={ProfileStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: theme.colors.accent,
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  console.log(routeName);
  if (routeName == 'home' || routeName == 'Feed' || routeName == 'Profile7') {
    return 'flex';
  }
  return 'none';
};

export default StudentTabNavigator;
