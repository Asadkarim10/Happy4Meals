import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import MapView from 'react-native-maps'


export default class Maps extends React.Component {
  render() {
    return (
        
          
      <MapView style = {{
        flex:2,
        flexDirection: "row"
      }}
  
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} />

  
      
    );
  }
}


