import { StyleSheet } from "react-native";

export const colors = {
    background: '#CFD8DC',
    backgroundInput: '#FFF3E0',
    blue50: '#E3F2FD',
    blue: '#2196F3',
    orange: '#FF9800',
    grey: '#E0E0E0',
    red: '#F44336',
    placeHolder: '#90A4AE',
    white: "#FFFFFF",
    black: '#000000',
    violet200: '#DDD6FE',
};

export const theme = StyleSheet.create({
    container: {
        flex: 1,
        margin: 12,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: colors.blue,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
    },
    textButton: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'center',
    },
    marginBottom: {
        marginBottom: 12,
    },
    marginTop: {
        marginTop: 12,
    },
    input: {
        backgroundColor: colors.blue50,
        fontSize: 16,
        padding: 12,
        borderWidth: 0.5,
        borderColor: colors.grey,
        borderRadius: 8,
        width: 300,
    },
    label: {
        fontSize: 20,
        fontWeight: 500,
        marginVertical: 8,
    },
    listItem: {
        fontSize: 20,
    },
    containerInfos: {
        width: '85%',
        backgroundColor: colors.violet200,
        paddingLeft: 12,
        opacity: 0.8,
        borderRadius: 8,
    },
})
