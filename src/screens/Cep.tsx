import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { theme } from "../themes/theme"
import { cepApi } from "../services/api"
import { useState } from "react"
import { useFonts, Baloo2_400Regular } from "@expo-google-fonts/baloo-2"

export const BuscaCep = () => {
    const [cep, setCep] = useState('')
    const [info, setInfo] = useState('Cidade: \nEstado: \nRegião: \nIBGE: \nSiafi:')

    const fontsLoaded = useFonts({
        Baloo2_400Regular
    });

    if (!fontsLoaded) {
        return null; 
    }
    
    async function getCep() {
        if (cep == '' || cep.length > 8 || cep.length < 8){
            Alert.alert('Cep vázio ou invalido')
            setCep('')
            setInfo('Cidade: \nEstado: \nRegião: \nIBGE: \nSiafi: ')
        }

        try {
            const response = await cepApi.get(`/${cep}/json/`)
            
            setInfo('Cidade: '+response.data.localidade+
                    '\nEstado: '+response.data.estado+
                    '\nRegiao: '+response.data.regiao+
                    '\nIBGE: '+response.data.ibge+
                    '\nSiafi: '+response.data.siafi
            )
            /*Alert.alert('Cidade: '+response.data.localidade+
                        '\nCódigo IBGE: '+response.data.ibge)*/
        } catch (error) {
           console.log('error: ', error) 
        }
    }

    return(
        <SafeAreaView style={theme.container}>            
            <Text style={theme.label}>BUSCA CEP: </Text>
            <TextInput 
                value={cep}
                onChangeText={(input) => setCep(input)}
                style={theme.input}
                placeholder="digite um CEP"
                keyboardType="numeric"/> 
            <TouchableOpacity style={[theme.button, theme.marginTop]} onPress={() => getCep()} >
                <Text style={[theme.textButton, styles.text]}>Buscar</Text>
            </TouchableOpacity>
            <View style={[theme.containerInfos, theme.marginTop]}>
                <Text style={[theme.marginTop, theme.label, styles.text]}>{info}</Text>                       
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text:{
        fontFamily: 'Baloo2_400Regular',
        fontSize: 22,
    }
})
