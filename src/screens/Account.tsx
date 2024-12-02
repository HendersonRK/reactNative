import { useState } from "react"
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native"
import { IUser } from "../@types/user"
import { theme } from "../themes/theme"

export const Account = () => {
    const [user, setUser] = useState<IUser>({
        name: 'Henderson',
        age: 37,
        city: 'Teutônia'
    } as IUser)

    return(
        <SafeAreaView style={theme.container}>
            <Text style={styles.title}>Meus Dados:</Text>
            <Text style={styles.subtitle}>{user.name}</Text>
            <Text style={styles.subtitle}>{user.age}</Text>
            <Text style={styles.subtitle}>{user.city}</Text>
            <TouchableOpacity onPress={() => setUser({...user, age: user.age+1}) }>
                <Text style={theme.button}>Fazer Aniversário</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    }, 
    subtitle: {
        fontSize: 20,
    },
})