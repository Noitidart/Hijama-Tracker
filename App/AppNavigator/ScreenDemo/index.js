// @flow

import React, { PureComponent } from 'react'
import { Button, View, Text } from 'react-native'

import styles from  './styles'
import stylesNavigator from  '../styles'

type Props = {
    navigation: {
        navigate: Navigate
    }
}

class ScreenDemo extends PureComponent<Props> {
    static navigationOptions = {
        title: 'Demo'
    }

    render() {
        return (
            <View style={stylesNavigator.screen}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <Button title="Go to Screen Two" onPress={this.gotoScreenTwo} />
                <Button title="Go to Screen Three" onPress={this.gotoScreenThree} />
            </View>
        )
    }

    gotoScreenTwo = () => this.props.navigation.navigate('two')
    gotoScreenThree = () => this.props.navigation.navigate('three')
}

export default ScreenDemo
