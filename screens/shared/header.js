import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        marginTop: 27
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
      },
})

export default Header;