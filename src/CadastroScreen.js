import React, {Component} from 'react';
import {Text, View, Animated, Button, StyleSheet} from 'react-native'


export default class CadastroScreen extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela de Cadastrar..</Text>

        <Button title="Finalizar Cadastro" onPress={this.props.finalizar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

