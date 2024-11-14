import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native"


export const Contador = () => {
    const [count, setCount] = useState<number>(0);

    return(
        <SafeAreaView style={styles.container}>
            <Text>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count+1)}>
                <Text>Add</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})