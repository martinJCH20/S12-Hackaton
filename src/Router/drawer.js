import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MenuDrawer } from '../Components/Menu/MenuDrawer'
import { MainStackNavigator } from './main'
import Pokemons from '../Scenes/Pokemons';
import DetailPokemon from '../Scenes/DetailPokemon';
const Drawer = createDrawerNavigator();

const DrawerStackNavigator = () => {
   // console.warn('props', props)
    return(
        <Drawer.Navigator
        initialRouteName={'Pokemons'}        
        drawerContent={(props) => <MenuDrawer {...props}/>}
        >
            <Drawer.Screen
                name='Pokemons' 
                component={Pokemons}
            />
            <Drawer.Screen
                name='DetailPokemon' 
                component={DetailPokemon}
            />
        </Drawer.Navigator>
    )
}

export {
DrawerStackNavigator
}
