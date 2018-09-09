import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native'


export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      widthRet: new Animated.Value(250),
      heightRet: new Animated.Value(50),
      opacityRet: new Animated.Value(1)
    };

    Animated.loop(

      Animated.sequence([
        Animated.timing(
          this.state.heightRet,
          {
            toValue:100,
            duration:500
          }
        ),
        Animated.timing(
          this.state.heightRet,
          {
            toValue:150,
            duration:500
          }
        ),
      Animated.timing(
          this.state.heightRet,
          {
            toValue:100,
            duration:500
          }
        ),
        Animated.timing(
          this.state.heightRet,
          {
            toValue:50,
            duration:500
          }
        )                
      ])

    ).start();

  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

        <Animated.View style={{opacity: this.state.opacityRet ,width: this.state.widthRet, height: this.state.heightRet, backgroundColor: '#FF0000'}}>
          <Text style={{color: '#FFFFFF', fontSize: 25, textAlign:'center'}}>Texto qualquer</Text>
        </Animated.View>

      </View>
    );
  }
}

