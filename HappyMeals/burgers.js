import React, { Component } from 'react';
import { Image, Text, TextInput, ImageBackground, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Tab from './tabs'

class Offer extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "white"
            }}>
               


                <View style={{
                    flex: 2,
                    backgroundColor:"#f25a5d",
                   
                }}>

                  
                <View style = {{
                    height:100,
                    width:wp("90%"), 
                    justifyContent:'center',
                    alignSelf:"center"
                }}>
                    <Text style = {{
                        fontSize:40,
                        fontWeight:"700",
                        color:'white'
                    }}>Latest Offers</Text>

                </View>


                <View style = {{
                    flexDirection:'row',
                    width:wp("90%"),
                    alignSelf:'center',
                    justifyContent:'space-between'
                }}>

                    <View>
                    <Text style = {{
                        color:'white'
                    }}>Asad karim mughal</Text>
                    <Text style = {{
                        marginTop:5,
                        color:'white'
                    }}>Asad karim mughal</Text>

                    <TouchableOpacity style = {{
                        width:wp("30%"),
                        borderRadius:20,
                        height:30,
                        marginTop:10,
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor:'white'
                    }}>
                        <Text>Asad karim</Text>
                    </TouchableOpacity>

                    </View>

                    <View>
                    <Image  style = {{
                            width:180,
                            marginTop:10,
                            height:90 }}
              source={require('./Assets/fastdelivery.jpg')}/>
                    </View>

                </View>
                  



                   





                   
                   
                </View>
                <View style={{
                    flex: 3.5,
                    marginTop:-10,
                    backgroundColor:'white',
                    width: wp('100%'),
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15,
                    alignSelf: 'center',
                    

                }}>
                    <ScrollView>
                        <ImageBackground source={require('./Assets/burger.jpg')} style={{ width: '98%', alignSelf: 'center', height: 200, marginTop:20 }}>
                            <View style={{ position: 'absolute', top: 130, left: 0, right: 20, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    flexDirection: 'row',
                                    alignSelf: 'flex-end',
                                    height: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 20,
                                    width: wp('30%')

                                }}>
                                    <Text style={{

                                        alignSelf: 'center'
                                    }}>20 - 30 mins</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{
                            width: wp("93%"),
                            alignSelf: 'center',
                            height: 45,
                            justifyContent: 'flex-end',

                        }} >
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 30,
                            }}>Hollywood starz cafe</Text>
                        </View>
                        <View style={{
                            width: wp('93%'),
                            flexDirection: 'row',
                            alignSelf: 'center',
                            alignContent:'center'
                        }}>
                            <Foundation name="star" size={25} color="red" />
                            <Text style={{
                                fontSize: 17,
                                marginBottom: 20
                            }}> <Text style = {{ color:"#d9cfcf"}}>4.9</Text> (124 ratings) Cafe -Western Food - $$</Text>
                        </View>

                        <ImageBackground source={require('./Assets/burger.jpg')} style={{ width: '98%', alignSelf: 'center', height: 200, }}>
                            <View style={{ position: 'absolute', top: 130, left: 0, right: 20, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    flexDirection: 'row',
                                    alignSelf: 'flex-end',
                                    height: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 20,
                                    width: wp('30%')

                                }}>
                                    <Text style={{

                                        alignSelf: 'center'
                                    }}>20 - 30 mins</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{
                            width: wp("93%"),
                            alignSelf: 'center',
                            height: 45,
                            justifyContent: 'flex-end',

                        }} >
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 30,
                            }}>Hollywood starz cafe</Text>
                        </View>
                        <View style={{
                            width: wp('93%'),
                            flexDirection: 'row',
                            alignSelf: 'center',
                            alignContent:'center'
                        }}>
                            <Foundation name="star" size={25} color="red" />
                            <Text style={{
                                fontSize: 17
                            }}><Text style = {{ color:"#d9cfcf"}}>4.9</Text> (124 ratings) Cafe -Western Food - $$</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Offer;

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