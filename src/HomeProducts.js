import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default class HomeProducts extends Component{

    constructor(props){
        super(props);
        this.state = {
            list:props.navigation.state.params.products
        };
    }

    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
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
    });

    render(){
        return(
            <View style={styles.container}>
                <FlatList data={this.state.list} renderItem={({item}) => <ProductsItem data={item} /> } />
            </View>
        );
    }
}

class ProductsItem extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <View style={styles.productItem}>
                <Image source={this.props.data.img} style={styles.producImagem}/>
                <Text style={styles.productName}> {this.props.data.name} </Text>
            </View>
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
    productItem:{
        flex:1,
        flexDirection:'row',
        height:100,
        backgroundColor:'#ffffff',
        margin:10,
        borderRadius:5,
        padding:10,
        alignItems:'center'
    },
    producImagem:{
        width:64,
        height:64,
        marginRight:30
    },
    productName:{
        fontSize:16
    }
});