import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class HomeList extends Component{

    constructor(props){
        super(props);
        this.state = {

            list:[
                {
                    key:1,
                    title:'Prato Executivo',
                    img:require('../images/tipos/breakfast.png'),
                    description:'Pratos já prontos para comer',
                    bg:'#e35339',
                    products:[
                        {key:1, name:'Prato de Macarrão', img:require('../images/executivos/dinner.png')},
                        {key:2, name:'Prato de Peixe', img:require('../images/executivos/steam.png')},
                        {key:3, name:'Prato de Arroz', img:require('../images/executivos/fruit.png')}
                    ]
                },
                {
                    key:2,
                    title:'Saladas',
                    img:require('../images/tipos/food.png'),
                    description:'Pratos saudáveis para você.',
                    bg:'#a6bb24',
                    products:[
                        {key:1, name:'Prato de Batatas', img:require('../images/saladas/batata_cozida.png')},
                        {key:2, name:'Prato de Tomate', img:require('../images/saladas/hotdog_tomate.png')},
                        {key:3, name:'Prato de Ervas', img:require('../images/saladas/soup.png')}
                    ]
                },
                {
                    key:3,
                    title:'Bebidas',
                    img:require('../images/tipos/drinks.png'),
                    description:'Bebidas para você se refrescar.',
                    bg:'#079ed4',
                    products:[
                        {key:1, name:'Coca-Cola', img:require('../images/bebidas/cocacola.png')},
                        {key:2, name:'Soda', img:require('../images/bebidas/soda.png')},
                        {key:3, name:'Água', img:require('../images/bebidas/water.png')}
                    ]
                },
                {
                    key:4,
                    title:'Sobremesas',
                    img:require('../images/tipos/cake.png'),
                    description:'Sobremesas para adoçar sua vida.',
                    //bg:'#fcb81c',
                    bg:'#6a5acd',
                    products:[
                        {key:1, name:'Empada', img:require('../images/sobremesas/muffin.png')},
                        {key:2, name:'Sorvete', img:require('../images/sobremesas/icecream.png')},
                        {key:3, name:'Bolo', img:require('../images/sobremesas/cake.png')}
                    ]
                }
            ]

        };
    }

    static navigationOptions = {
        title:'Pé de Fava',
        tabBarIcon:({focused, tintColor}) => {
            if (focused){
                return(
                    <Image source={require('../images/icons/home_azul.png')} style={styles.icone}/>
                )
            }else{
                return(
                    <Image source={require('../images/icons/home_preta.png')} style={styles.icone}/>
                )
            }
            
        }
    };

    render(){
        return(
            <View style={styles.container}>
                <FlatList data={this.state.list} renderItem={({item}) => <Lista data={item} navigation={this.props.navigation}/>}/>
            </View>
        );
    }
}

class Lista extends Component{

    constructor(props){
        super(props);
        this.state = {};

        this.clicou = this.clicou.bind(this);
    }

    clicou(){
        this.props.navigation.navigate('HomeProducts', {title:this.props.data.title, products:this.props.data.products});
    }

    render(){
        return(
            <TouchableHighlight underlayColor='#d3d3d3' onPress={this.clicou} >
                <View style={[styles.listaItem, {backgroundColor:this.props.data.bg}]}>
                    
                    <Image source={this.props.data.img} style={styles.listaImagem}/>
                    <View>
                        <Text style={styles.listaTitle}> {this.props.data.title} </Text>
                        <Text style={styles.listaDescription}> {this.props.data.description} </Text>
                    </View>

                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    },
    container:{
        flex:1,
        backgroundColor:'#cccccc'
    },
    listaItem:{
        height:100,
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        marginBottom:15,
        margin:10,
        borderRadius:10
    },
    listaImagem:{
        width:64,
        height:64,
        marginLeft:20,
        marginRight:20
    },
    listaTitle:{
        color:'#ffffff',
        fontSize:25,
        fontWeight:'bold'
    },
    listaDescription:{
        color:'#ffffff',
        fontSize:16
    }
});