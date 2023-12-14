import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TakePicture from './Compoenets/TakePicture';
import ViewPicture from './Compoenets/ViewPicture';
import Home from './Compoenets/Home';


const stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
      <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='TakePicture' component={TakePicture}/>
        <stack.Screen name='ViewPicture' component={ViewPicture} />
      </stack.Navigator>
    </NavigationContainer>
  );
};