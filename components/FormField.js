import { Component } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class FormField extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.formField}>
                <Text style={styles.formFieldHeader}>{this.props.name}</Text>
                <TextInput
                style={styles.formFieldInput}
                onChangeText={this.props.handleTextChangeFunction}
                keyboardType="number-pad"
                underlineColorAndroid="blue"
                ></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    formField: {
        marginVertical:10
    },
    formFieldHeader: {
        color: "blue",
        fontWeight:"bold"
    },
    formFieldInput: {
        fontSize: 15
    }
});