// @flow

import React, { PureComponent } from 'react'
import { Button, View, Text } from 'react-native'

import Counter from './Counter'

import styles from  './styles'
import stylesNavigator from '../styles'

class ScreenTwo extends PureComponent<void> {
    static navigationOptions = {
        title: 'Two'
    }

    render() {
        return (
            <View style={stylesNavigator.screen}>
                <Text style={styles.instructions}>
                    page 2
                </Text>
                <Counter />
            </View>
        )
    }
}

export default ScreenTwo
