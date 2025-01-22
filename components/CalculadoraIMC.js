import { Component } from "react";
import { StyleSheet, Button, Text, View } from 'react-native';
import FormField from "./FormField";
import IMC from "../utils/IMC";

export default class CalculadoraIMC extends Component {

    constructor(props){
        super(props);
        this.state = {
            weight: "100",
            height: "",
            imcResult: {
                text: "",
                color: ""
            }
        }
    }
    
    handlePress = () => {

        const weight = this.state.weight.trim();
        const height = this.state.height.trim();

        if (weight != "" && height != "") {
            
            const imcResult = IMC.getIMCResult(weight, height);

            this.setState({imcResult: imcResult});
        }
    }

    calculateIMC = (weight, height) => {

        return weight / Math.pow(height,2);
    }

    handleWeightText = (value) => {
        this.setState({weight: value});
    }

    handleHeightText = (value) => {
        this.setState({height: value});
    }
    
    render(){
        return (
          <View style={styles.container}>
            <Text style={styles.mainTitle}>Calculadora IMC</Text>
            <View style={styles.form}>
                <Text style={styles.formTitle}>Datos</Text>
                <FormField name="PESO" handleTextChangeFunction={this.handleWeightText}></FormField>
                <FormField name="ALTURA" handleTextChangeFunction={this.handleHeightText}></FormField>
                <Button title="Calcular IMC" onPress={this.handlePress}></Button>
                <View style={styles.formResult}>
                    <Text>Resultado</Text>
                    <Text style={{color: this.state.imcResult.color}}>{this.state.imcResult.text}</Text>
                </View>
            </View>
            <Text style={styles.footer}>Created for 2n DAM</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: "stretch",
    justifyContent: 'center',
    padding: 10
  },
  mainTitle: {
    color: "red",
    fontSize: 25,
    textAlign:"center"
  },
  formTitle: {
    marginLeft: 5,
    color: "red",
    fontSize: 25
  },
  form: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 15,
    alignItems: "stretch"
  },
  formResult: {
    marginTop: 10,
    marginBottom: 20
  },
  footer: {
    color:"gray"
  }
});