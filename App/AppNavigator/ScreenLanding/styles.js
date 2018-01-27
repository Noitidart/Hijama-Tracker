// @flow

import { StyleSheet } from 'react-native'

import CONFIG from '../../config'

const styles = StyleSheet.create({
    cardContent: {
        backgroundColor: 'deepskyblue'
    },

    bio: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DCE0E5',
        marginVertical: 10,
        marginHorizontal: 30,
        borderRadius: 5
    },
    bioPic: {
        height: 200,
        resizeMode: 'contain',
        marginTop: 15
    },
    bioContent: {
        padding: 20,
        paddingTop: 10
    },
    hr: {
        height: 1,
        width: '90%',
        backgroundColor: '#DCE0E5',
        position: 'absolute'
    },
    block: {
        height: 1,
        width: '50%',
        backgroundColor: CONFIG.background,
        position: 'absolute'
    },
    bioRoleWrap: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    bioRole: {
        color: '#00AA7E',
        fontSize: 16,
        fontWeight: 'bold'
    },
    bioNameWrap: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    bioName: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18
    },
    persona: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DCE0E5',
        margin: 20,
        borderRadius: 5
    },
    personaContent: {
        padding: 20
    },
    personaUnderlay: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute'
    },
    personaTitle: {
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
})

export default styles
