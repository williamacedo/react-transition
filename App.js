import React, {Component} from 'react';
import {Text, View, Animated, StyleSheet} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      numero:new Animated.Value(0)
    };

    Animated.timing(
      this.state.numero,
      {
        toValue:100,
        duration:2000
      }
    ).start();
  }

  render() {

    let pct = this.state.numero.interpolate({
      inputRange:[0, 100],
      outputRange:['0%', '100%']
    });

    return (
      <View style={styles.container}>
        <Animated.View style={{backgroundColor: '#FF0000', height: 50, width: pct}}>

        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

