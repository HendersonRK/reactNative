import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native"
import { theme } from "../themes/theme"
import { Icon } from "../components/Icons"
import { useState } from "react"
import { ILogin, NavigationProps } from "../@types"
import { loginApi } from "../services/api"
import { useNavigation } from "@react-navigation/native"
import { ILoginRet } from "../@types/loginRet"

export const Login = () => {
    const navigation = useNavigation<NavigationProps>()
    const [login, setLogin] = useState<ILogin>({
        username: '',
        password: ''
    })

    const doLogin = async () => {
        //validar o campo username
        if (login.username.length <= 0){
            Alert.alert('Atenção', 'Informe o nome de usuário!')
            return
        }

         if (login.password.length <= 0){
            Alert.alert('Atenção', 'Informe a senha do usuário!')
            return
        }

        const { data } = await loginApi
                .post('/auth/login', login)
                .catch(err => {
                    Alert.alert('Ops', 'Falha na autenticação!')
                    return { data:null } as { data: ILoginRet | null } //forca a tipagem
                })

        if(data) {
            console.log('Token: ', data.acessToken)
            console.log('User ID: ', data.id)

            navigation.reset({
                routes: [
                    {
                        name:'Home'
                    }
                ], index: 0
            })
        }

    }

    return(
        <SafeAreaView style={[theme.container, theme.center]}>
            <Icon name='lock'/>
            <Text style={theme.label}>Faça login</Text>

            <TextInput 
                style={[theme.input, theme.marginBottom]}
                placeholder="nome de usuario"
                value={login?.username}
                onChangeText={value => setLogin({...login, username : value})}
                />

             <TextInput 
                style={[theme.input, theme.marginBottom]}
                placeholder="password"
                value={login?.password}
                onChangeText={value => setLogin({...login, password : value})}
                secureTextEntry={true}
                />
            <TouchableOpacity 
                    style={theme.button} 
                    onPress={() => doLogin()}>
                    <Text style={theme.textButton}>LOGIN</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}