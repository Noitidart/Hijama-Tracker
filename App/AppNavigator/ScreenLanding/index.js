// @flow

import React, { PureComponent } from 'react'
import { ScrollView, View, Text, Image, Button } from 'react-native'

import styles from './styles'
import stylesNavigator from '../styles'


class ScreenThree extends PureComponent<void> {
    static navigationOptions = {
        title: 'Landing'
    }

    render() {
        return (
            <View style={stylesNavigator.screen}>
                <ScrollView>
                    <View>
                        <Text>ScreenLanding</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }

    gotoSchedule = () => null
}

export default ScreenThree
