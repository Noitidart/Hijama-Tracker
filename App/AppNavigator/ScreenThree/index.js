// @flow

import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import stylesNavigator from '../styles'

class ScreenThree extends PureComponent<void> {
    static navigationOptions = {
        title: 'Three'
    }

    render() {
        return (
            <View style={stylesNavigator.screen}>
                <Text style={styles.instructions}>
                    page 3
                </Text>
            </View>
        )
    }
}

export default ScreenThree
