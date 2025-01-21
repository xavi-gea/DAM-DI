import { Component } from "react";
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default class CalculadoraIMC extends Component {

    constructor(props){
        super(props);
        this.state = {
            weight: "100",
            height: "",
            imcResultText: "",
            imcResultColor:""
        }
    }
    
    handlePress = (weight, height) => {
        
        const imcResult = this.calculateIMC(weight, height);
        let resultText = "";
        let resultColor = "";

        if (imcResult < 18.5) {
            
            resultText = "peso insuficiente";
            resultColor = "green";

        }else if (imcResult >= 18.5 && imcResult < 25) {
            
            resultText = "normopeso";
            resultColor = "green";

        }else if (imcResult >= 25 && imcResult < 27) {

            resultText = "Sobrepeso grado I";
            resultColor = "green";

        }else if (imcResult >= 27 && imcResult < 30) {
            
            resultText = "Sobrepeso grado II (preobesidad)";
            resultColor = "orange";

        }else if (imcResult >= 30 && imcResult < 35) {

            resultText = "Obesidad de tipo I";
            resultColor = "orange";

        }else if (imcResult >= 35 && imcResult < 40) {

            resultText = "Obesidad de tipo II";
            resultColor = "orange";

        }else if (imcResult >= 40 && imcResult < 50) {

            resultText = "Obesidad de tipo III (mórbida)";
            resultColor = "red";

        }else{

            resultText = "Obesidad de tipo IV (extrema)";
            resultColor = "red";
        }

        this.setState({imcResultText: resultText});
        this.setState({imcResultColor: resultColor});
    }

    calculateIMC = (weight, height) => {

        return weight / Math.pow(height,2);
    }

    handleWeightText = (weight) => {
        this.setState({weight: weight});
    }

    handleHeightText = (weight) => {
        this.setState({height: weight});
    }
    
    render(){
        return (
          <View style={styles.container}>
            <Text>PESO</Text>
            <TextInput
              onChangeText={this.handleWeightText}
              style={{ fontSize: 15, fontWeight: "normal", width: 200 }}
              keyboardType="number-pad"
              underlineColorAndroid="blue"
            ></TextInput>
            <Text>ALTURA</Text>
            <TextInput
              onChangeText={this.handleHeightText}
              style={{ fontSize: 15, fontWeight: "normal", width: 200 }}
              keyboardType="number-pad"
              underlineColorAndroid="blue"
            ></TextInput>
            <Button title="Calcular IMC" onPress={()=>this.handlePress(this.state.weight, this.state.height)}></Button>
            <Text style={{color: this.state.imcResultColor}}>{this.state.imcResultText}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'center',
  },
});