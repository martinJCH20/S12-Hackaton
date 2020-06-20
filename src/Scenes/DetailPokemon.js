import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, Platform } from 'react-native'

export default class  DetailPokemon extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
      }
      goToPokemon = (item, index) => {
        console.warn('item', item)
        this.props.navigation.navigate('DetailPokemon', item)
      }
    render(){
        return (
            <View>
                <Text>Hola</Text>
            </View>
        )
    }
}
