import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Contato extends Component{

    static navigationOptions = {
        title:'Contato',
        tabBarIcon:({focused, tintColor}) => {
            if (focused){
                return(
                    <Image source={require('../images/icons/contato_azul.png')} style={styles.icone}/>
                )
            }else{
                return(
                    <Image source={require('../images/icons/contato_preto.png')} style={styles.icone}/>
                )
            }
            
        }
    };

    render(){
        return(
            <View style={styles.body}>
                <Text style={styles.texto}> Fale conosco </Text>
                <Text style={styles.descricao}>Entre em contato com a nossa equipe para solicitar novos
                    produtos, atenderemos com o maior prazer.
                </Text>
                <Text style={styles.descricao}>Ligue para a gente (088) 9 0000-0000</Text>

                <Text style={styles.descricao}>Ou envie-nos um e-mail para: suporte@maxdickinson.com</Text>

                <Image source={require('../images/icons/support.png')} style={styles.imagem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        paddingTop:30,
        alignItems:'center',
        backgroundColor:'#008080',
        justifyContent:'center'
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
        marginBottom:10,
        textAlign:'center'
    },
    descricao:{
        fontSize:18,
        color:'#ffffff',
        marginBottom:20,
        textAlign:'center'
    },
    imagem:{
        width:150,
        height:150,
        marginTop:50,
        marginBottom:55
    }
});