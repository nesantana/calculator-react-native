import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';

const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#FFF',
        backgroundColor: '#FA8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

export default class Buttons extends React.Component {
    render () {

        const stylesButton = [style.button];
        if (this.props.double) stylesButton.push(style.buttonDouble);
        if (this.props.triple) stylesButton.push(style.buttonTriple);
        if (this.props.operation) stylesButton.push(style.operationButton);


        return (
            <TouchableHighlight onPress={ () => this.props.onClick(this.props.label) }>
                <Text style={ stylesButton }>{ this.props.label }</Text>
            </TouchableHighlight>
        )
    };
}
