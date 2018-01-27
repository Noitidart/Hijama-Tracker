// @flow

import { StyleSheet } from 'react-native'

import CONFIG from './config'

const app = {
    flex: 1
}
const styles = StyleSheet.create({
    app,
    appOpaque: {
        ...app,
        backgroundColor: CONFIG.background // to hide splash in background - not working when keyboard view pushes it away though
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
})

export default styles
