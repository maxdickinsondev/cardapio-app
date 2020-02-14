import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Sobre extends Component{

    static navigationOptions = {
        title:'Sobre',
        tabBarIcon:({focused, tintColor}) => {
            if (focused){
                return(
                    <Image source={require('../images/icons/sobre_azul.png')} style={styles.icone}/>
                )
            }else{
                return(
                    <Image source={require('../images/icons/sobre_preto.png')} style={styles.icone}/>
                )
            }
            
        }
    };

    render(){
        return(
            <View style={styles.body}>
                <Text style={styles.texto}> Quem somos? </Text>
                <Text style={styles.descricao}>Somos uma empresa que busca solucionar problemas com as mais novas tecnologias
                    do mercado, ficamos felizes em satisfazer o cliente!
                </Text>

                <Image source={require('../images/icons/question.png')} style={styles.imagem}/>

                <Text style={styles.descricao}>MaxDickinson .Ltda</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        paddingTop:30,
        alignItems:'center',
        backgroundColor:'#008080'
    },  
    icone:{
        width:26,
        height:26
    },
    texto:{
        margin:10,
        fontSize:24,
        fontWeight:'bold',
        color:'#ffffff',
        marginBottom:30
    },
    descricao:{
        fontSize:18,
        color:'#ffffff',
        textAlign:'center'
    },
    imagem:{
        width:150,
        height:150,
        marginTop:50,
        marginBottom:55
    }
});