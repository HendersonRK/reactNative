import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, SafeAreaView, View, StyleSheet } from "react-native";
import { NavigationProps } from "../@types/navigation";
import { Icon } from "../components/Icons";
import { theme } from "../themes/theme";

export const Home = () => {

    const navigation = useNavigation<NavigationProps>();

    return(
        <SafeAreaView style={[theme.container, theme.center]}>
            <View style={styles.margins}>
                <Icon name='home' size={80}/>
            </View>
            
            <View style={styles.buttons}>
                <TouchableOpacity 
                    style={[theme.button, theme.marginBottom]} 
                    onPress={() => navigation.navigate('Account')}>
                    <Text style={theme.textButton}>ACCOUNT</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[theme.button, theme.marginBottom]} 
                    onPress={() => navigation.navigate('Contador')}>
                    <Text style={theme.textButton}>CONTADOR</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={theme.button} 
                    onPress={() => navigation.navigate('ToDoList')}>
                    <Text style={theme.textButton}>To Do List</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttons: {
        width: '100%',
        paddingHorizontal: 40,
    },
    margins: {
        marginVertical: 40,
    },
})