import { Account } from "../screens/Account";
import { Contador } from "../screens/Contador";
import { Home } from "../screens/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ToDoList } from "../screens/ToDoList";
import { Login } from "../screens/Login";
import { BuscaCep } from "../screens/Cep";

const Stack = createNativeStackNavigator();

export function StackRoutes() { 
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="ToDoList" component={ToDoList} />  
            <Stack.Screen name="Contador" component={Contador} />
            <Stack.Screen name="Account" component={Account} />  
            <Stack.Screen name="BuscaCep" component={BuscaCep} />           
        </Stack.Navigator>
    );
}