import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SigninScreen from './src/screens/SigninScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

