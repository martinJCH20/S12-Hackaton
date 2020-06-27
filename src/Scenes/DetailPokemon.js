import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, Platform, SafeAreaView  } from 'react-native'

const styles = StyleSheet.create({
    safeAreaContainer:{
        justifyContent: "center",
        alignItems: 'center'
    },
    container:{
        flexDirection: 'column',
        height: '75%',
        width: '90%',
        borderRadius: 15,
        backgroundColor: '#267FC2',
        alignItems: 'center',
        justifyContent: "center"
    },
    contenImage: {
        width: 160,
        height: 160,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center'
    },
    imagePokemon: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
        margin: 5
    },
    textPokemon:{
        color: '#ffffff', 
        fontSize: 25,
        fontWeight: 'bold'
    },
    pokemonTypes: {
        color: '#ffffff', 
        fontSize: 15,
        textAlign: 'center',
        alignItems: "flex-start"
    },
    basePokemon: {
        flexDirection: 'row',
        marginTop: 30
    },
    detailBase: {
        width: '30%',
        height: '10%',
        alignItems: 'center'
    },
    baseText: {
        color: '#ffffff',
        fontSize: 25 
    }
})

export default class  DetailPokemon extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
      }
    // goToPokemon = (item, index) => {
    //     //console.warn('item', item)
    //     //this.props.navigation.navigate('DetailPokemon', item)
    // }
    render(){
        const {index, img, type } = this.props.route.params
        const {name, url } = this.props.route.params.item
        //console.warn('details', this.props.route.params);
        console.log('detailsPokemon', this.props.route.params);
        return (
            <SafeAreaView  style={styles.safeAreaContainer} >
            <View style={styles.container}>
                <View style={styles.contenImage}>
                <Image
                    source={{uri: img}}
                    style={styles.imagePokemon}
                />
                </View>
                <View >
                <Text style={styles.textPokemon}>{name}</Text>
                </View>
                <View>
                {type && type.map((item, index) =>
                    <Text style={styles.pokemonTypes} >
                    {item.type.name}
                    </Text>
                )}
                </View>
                <View style={styles.basePokemon}>
                    <View style={styles.detailBase}>
                        <Text style={styles.baseText}>{index}</Text>
                        <Text style={styles.pokemonTypes}>Index</Text>
                    </View>
                    <View style={styles.detailBase}>
                        <Text style={styles.baseText}></Text>
                    </View>
                    <View style={styles.detailBase}>
                        <Text style={styles.baseText}></Text>
                    </View>
                </View>
            </View>
            </SafeAreaView>
        )
    }
}
