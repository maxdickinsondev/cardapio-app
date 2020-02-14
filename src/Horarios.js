import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Horarios extends Component{

    static navigationOptions = {
        title:'Horarios',
        tabBarIcon:({focused, tintColor}) => {
            if (focused){
                return(
                    <Image source={require('../images/icons/horario_azul.png')} style={styles.icone}/>
                )
            }else{
                return(
                    <Image source={require('../images/icons/horario_preto.png')} style={styles.icone}/>
                )
            }
            
        }
    };

    render(){
        return(
            <View style={styles.body}>
                <Text style={styles.texto}> Atendimento </Text>
                <Text style={styles.descricao}>Atendemos de segunda à sábado, de 7:00 hrs da manhã
                    até às 10:00 hrs da noite!
                </Text>

                <Image source={require('../images/icons/calendar.png')} style={styles.imagem}/>
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
        marginTop:60
    }
});