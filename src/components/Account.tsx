import { useState } from "react"
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native"
import { IUser } from "../@types/user.t"

export const Account = () => {
    const [user, setUser] = useState<IUser>({
        name: 'Henderson',
        age: 37,
        city: 'Teutônia'
    } as IUser)

    return(
        <SafeAreaView style={styles.container}>
            <Text>Meus Dados:</Text>
            <Text>{user.name}</Text>
            <Text>{user.age}</Text>
            <Text>{user.city}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setUser({...user, age: user.age+1}) }>
                <Text>Fazer Aniversário</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor: 'blue',
        padding: 10,
    }
})