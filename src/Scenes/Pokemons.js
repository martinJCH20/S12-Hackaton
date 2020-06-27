import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView} from 'react-native'
import CardPokemon from '../Components/Pokemon/CardPokemon'

export default class Pokemons extends Component {
  constructor(props){
    super(props)
    this.state = {
        pokemon:[],
        types: []
    }
  }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then((data) => {
        let details = [];
        this.setState({ pokemon: data.results })
        return Promise.all(data.results.map( async(item, index)=>  {
            const detail = await this.goDetailPokemon(index+1)
            //details.push(detail);
            return detail
            //console.warn(detail);
        }))
        // data.results.map(async(item, index)=> {
        //     const detail = await this.goDetailPokemon(index+1);
        //     details.push(detail);
        //     //console.warn(detail);
        //     //console.warn(detail);
        //     return details;
        //     //console.warn(await this.goDetailPokemon(index+1))
        // })
        //this.setState({types: details})
    })
    .then((results)=>{
        //console.warn(results);
        this.setState({types: results})
    })
  }
  goDetailPokemon = async (key)=>{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`)
    let data = await response.json()
    return data.types;
  }
  //async function getUserAsync(name){let response = await fetch(`https://api.github.com/users/${name}`);let data = await response.json()return data;}getUserAsync('yourUsernameHere').then(data => console.log(data));
  
  goToPokemon = (item, index, imagePokemon, type  ) => {
    //console.warn('item', item)
    this.props.navigation.navigate('DetailPokemon', {item: item, index: index + 1, img: imagePokemon, type: type})
  }
    render(){
        const { pokemon, types } = this.state;    
        //console.warn(pokemon);
        //console.warn(types);
         return (
            <View style={{ flex: 1, marginTop: 5}}>
                <ScrollView
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={100}
                            decelerationRate='fast'
                        >
                            { pokemon && pokemon.map((item, index)=> 
                            <CardPokemon
                                    onPress={() => this.goToPokemon(item, index,  
                                      `https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`,
                                      types[index]
                                      )}
                                    backgroundColor={'#267FC2'} 
                                    imagePokemon={`https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`}
                                    productName={item.name}
                                    order={index+1}
                                    image={`https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`}
                                    type={types ? types[index] : null}
                                    direction={require('../../assets/right.png')}
                                    keyItem={index+1}
                               />
                            )
                            }
                </ScrollView>
            </View>
          )
    }
}