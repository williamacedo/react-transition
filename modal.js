import React, {Component} from 'react';
import {Text, View, Animated, Button, StyleSheet, Modal} from 'react-native';
import CadastroScreen from './src/CadastroScreen';


export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      modalVisible:false
    };

    this.cadastrar = this.cadastrar.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(status) {
    this.setState({modalVisible:status});
  }

  cadastrar(){
    this.setModalVisible(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Cadastra-se" onPress={this.cadastrar} />
        <Modal animationType="slide" transparent={true} visible={this.state.modalVisible} onRequestClose={() => {}}>
          <View style={styles.modalWindow}>
            <View style={styles.modalBody}>
              <CadastroScreen finalizar={()=>{
                this.setModalVisible(false);
              }}/>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999999'
  },
  modalWindow:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  modalBody:{
    width: 300,
    height: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  }
});

