import React, { Component } from 'react';
import { Image, Text, TextInput, ImageBackground, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Tab from './tabs'

class Burger extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "white"
            }}>



                <View style={{
                    flex: 2,
                    backgroundColor: "#f25a5d",

                }}>


                    <ImageBackground source={require('./Assets/burger.jpg')} style={{ width: '100%', alignSelf: 'center', height: 250, }}>
                        <View style={{ position: 'absolute', top: 130, left: 0, right: 20, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>






                            <View style={{
                                borderRadius: 15,
                                flexDirection: 'row',
                                alignSelf: 'flex-start',
                                height: 50,

                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 20,
                                width: wp('30%')

                            }}>
                                <Text style={{
                                    color: "white",
                                    fontSize: 34,
                                    fontWeight: "bold",
                                    alignSelf: 'center'
                                }}>Burgers </Text>
                            </View>
                        </View>
                    </ImageBackground>




















                </View>
                <View style={{
                    flex: 3.5,
                    marginTop: -10,
                    backgroundColor: 'white',
                    width: wp('100%'),
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    alignSelf: 'center',


                }}>

                    <View style={{
                        width: wp('96%'),
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text>Notification</Text>
                        <Text>Icon</Text>
                    </View>

                    <ScrollView>

                        <View style={{
                            width:wp('90%'),
                            alignSelf:'center',
                            backgroundColor:'yellow',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                        }}>

                            <View style={{
                                flexDirection: 'row',
                            
                            }}>

                                <View  >

                                <Image style = {{ width:wp("40%"), height:70}}
          source={require('./Assets/burg.jpg')}
        />
        
                                    
                                </View>

                                <View style = {{
                                
                                    width:wp("50%"),
                                    alignSelf:'center',
                                    paddingLeft:8
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        width:wp("49%"),
                                        justifyContent:'space-between',
                                        alignSelf:'center',
                                        
                                    }}>
                                        <Text>Burger Queens </Text>
                                        <Text>Icons</Text>
                                    </View>
                                    <Text>Asad karim mughal</Text>

                                    <View style={{
                                        flexDirection: 'row'
                                    }} >
                                        <Text>icon</Text>
                                        <Text>Asad karim mughal</Text>
                                    </View>
                                    <View style = {{
                                        flexDirection:'row',
                                        backgroundColor:'green',
                                        justifyContent:'flex-end',
                                        alignSelf:'flex-end'
                                    }}>
                                    <TouchableOpacity style = {{}}>
                                        <Text>Press</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Burger;

const styles = StyleSheet.create({
    img: {
        width: '95%',
        alignSelf: 'center',
        borderRadius: 20,
        height: 250,
        marginTop: 10

    },

    button: {
        width: '92%',
        height: 50,
        paddingLeft: 15,
        alignSelf: 'center',
        backgroundColor: '#f05a5c',
        borderRadius: 25,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 15
    }
});