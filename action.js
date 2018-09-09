import React, {Component} from 'react';
import {Text, View, Animated, Button} from 'react-native'


export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      widthRet: new Animated.Value(250),
      heightRet: new Animated.Value(50),
      opacityRet: new Animated.Value(1)
    };

    this.dimunirAltura = this.dimunirAltura.bind(this);
    this.aumentarAltura = this.aumentarAltura.bind(this);

  }

  aumentarAltura() {
      Animated.timing(
        this.state.heightRet,
        {
          toValue:100,
          duration:500
        }
      ).start();
  }

  dimunirAltura() {
      Animated.timing(
        this.state.heightRet,
        {
          toValue:50,
          duration:500
        }
      ).start();
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
          <Animated.View style={{opacity: this.state.opacityRet ,width: this.state.widthRet, height: this.state.heightRet, backgroundColor: '#FF0000'}}>
            <Text style={{color: '#FFFFFF', fontSize: 25, textAlign:'center'}}>Texto qualquer</Text>
          </Animated.View>
        </View>
        <View style={{height: 100, flexDirection: 'row', justifyContent: 'space-around'}}>
          <Button title="Aumentar Altura (100)" onPress={this.aumentarAltura} />
          <Button title="Diminuir Altura (50)" onPress={this.dimunirAltura} />
        </View>
      </View>
    );
  }
}

