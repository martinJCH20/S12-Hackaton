import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, Platform, TouchableOpacity } from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        marginHorizontal: Platform.OS === 'ios' ? 10 : 5,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    imageContainer: {
        flex: 1,
        marginTop: 10,
        marginLeft: 5,
        width: "30%",
        height: "100%"
    },
    containerDetails: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    goDetails:{
        flex: 1,
        width: "20%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    imagePorkemon: {
        width: 70,
        height: 70,
        resizeMode: 'stretch',
    },
    pokemonName: {
        color: '#ffffff', 
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    pokemonDetail: {
        color: '#ffffff', 
        fontSize: 12,
        textAlign: 'center',
        alignItems: "flex-start"
    },
    imageDirection: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        marginRight: 10
    }
})
const CardPokemon = (props) => {
    const { imagePokemon, productName, order, image, type, backgroundColor, onPress, direction, keyItem } = props
    const goToProduct = (item, index) => {
        console.warn(' this.props.goToProduct Function', onPress)
        onPress && onPress(item, index)
    }
    return(
            <View style={[styles.container, {backgroundColor: backgroundColor}]}>
                <View style={{ marginVertical: 10, flexDirection:'row' }}>
                    <View style={styles.imageContainer}>
                    <Image
                        source={{uri: imagePokemon}}
                        style={styles.imagePorkemon}
                    />
                    </View>
                    <View style={styles.containerDetails}>
                        <Text style={styles.pokemonName}>
                        {productName}
                        </Text>
                        <Text style={styles.pokemonDetail}>
                        {order}
                        </Text>
                        <Text style={{alignItems: "flex-start", color: '#ffffff', fontSize: 12}}>
                        {image}
                        </Text>
                        {type && type.map((item, index) =>
                        <Text style={styles.pokemonDetail} >
                        {item.type.name}
                        </Text>
                        ) }
                    </View>
                    <View style={styles.goDetails}>
                    <TouchableOpacity onPress={goToProduct}>
                        <Image
                            source={direction}
                            style={styles.imageDirection}
                        />
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}

export {
    CardPokemon
}