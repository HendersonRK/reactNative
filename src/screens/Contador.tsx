import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native"
import { colors, theme } from "../themes/theme";

export const Contador = () => {
    const [count, setCount] = useState<number>(0);

    return(
        <SafeAreaView style={theme.container}>
            <Text>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count+1)}>
                <Text style={theme.button}>Add</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
