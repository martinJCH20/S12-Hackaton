
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Pokemons from '../Scenes/Pokemons';
import DetailPokemon from '../Scenes/DetailPokemon';

const Stack = createStackNavigator();

const MainStackNavigator = (props) => {
    const forFade = ({ current, closing }) => ({
      cardStyle: {
        opacity: current.progress,
      },
    });
    return (
      <Stack.Navigator
      initialRouteName="Pokemons"
      headerMode="none"
  >
    <Stack.Screen name="Pokemons" component={Pokemons}  options={{ cardStyleInterpolator: forFade }}/> 
    <Stack.Screen name="DetailPokemon" component={DetailPokemon} options={{ cardStyleInterpolator: forFade }} />
  </Stack.Navigator>
    );
  }
  
  export {
      MainStackNavigator
  }