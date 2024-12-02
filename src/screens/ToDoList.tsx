import { SafeAreaView, ScrollView, Text, TextInput, FlatList, View, Alert, TouchableOpacity, StyleSheet } from "react-native"
import { colors, theme } from "../themes/theme"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ITask } from "../@types/task"
import { Icon } from "../components/Icons"


export const ToDoList = () => {
    const [input, setInput] = useState<string>('')
    const [toDoList, setToDoList] = useState<ITask[]>([])

    const Item = ({id, checked, title}: ITask) => (
        <View style={style.item}>
            <View style={style.itemTitle}>                
                <TouchableOpacity
                    style={style.checked}
                    onPress={() => updadeItem(id)}>
                    <Icon name={checked ? 'check-square' : 'square'} size={22}/>
                </TouchableOpacity>
                <Text style={checked ? style.titleChecked : style.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={() => removeItem(id)}>
                <Icon name='trash' size={18} color={colors.red}/>
            </TouchableOpacity>
        </View>
    )

    const save = (text: string) => {
        const newList = [...toDoList, 
            {
                id: toDoList.length +1,
                checked: false,
                title: text
            }
        ];
        setToDoList(newList);
        storeData(newList);
    }

    const updadeItem = (id: number) => {
        try{
            const newList = toDoList.map(item => 
            (item.id === id) ? {...item, checked: !item.checked} : {...item}
            )
            setToDoList(newList);
            storeData(newList);
        }catch(e){
            console.log('erro:', e)
        }
        
    }

    const storeData = async (value: ITask[]) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('my-task', jsonValue)
        } catch (e) {
            console.log('erro: ',e)
        }
    } 

    const getData = async (): Promise<ITask[]> => {
        try {
            const jsonValue = await AsyncStorage.getItem('my-task');
            
            if(jsonValue != null){
                const parsed = JSON.parse(jsonValue);
                return parsed
            } else {
                return[]
            }
        } catch (e) {
            console.error('Erro ao ler os dados: ', e)
            return[];
        }
    }

    const removeItem = (id : number) => {
        try{
            Alert.alert('Remover Item', 'Tem certesa que deseja remover a Tarefa?',[
                {
                    text: 'Cancelar',
                    onPress: () => {
                        console.log('Operação cancelada!')
                    }
                },
                {
                    text: 'Sim',
                    onPress:() => {
                        const newTodoList = toDoList.filter(item => item.id != id)
                        setToDoList(newTodoList)
                        storeData(newTodoList)
                    }
                }
            ])
        } catch (e) {
            console.log('erro: ', e)
        }
    }

    const updateItem = (id: number) => {
        try {
            const newList = toDoList.map(item => 
            (item.id === id) ? {...item, checked: !item.checked} : {...item}
            )

            setToDoList(newList)
            storeData(newList)
        } catch (e) {
            console.log('updateItem - error: ', e)
        }
    }

    useEffect(() => { //usado para recuperar a lista de tarefas quando o aplicativo é iniciado
       const fetchData = async () => {
        const fetch = await getData()
        setToDoList(fetch)
       }

       fetchData()
    }, [])

    return(
        <SafeAreaView style={theme.container}>           
            <TextInput 
                style={theme.input}
                value={input}
                onChangeText={(value) => setInput(value)} //pega o valor do input e coloca dentro da função setInput
                placeholder="Descreva a tarefa!"
                onSubmitEditing={() => {
                    save(input);
                    setInput('');
                }} />

                 <Text style={theme.label}>Lista de Tarefas:</Text>
                {/* <ScrollView showsVerticalScrollIndicator={false}> 
                    {
                        toDoList.map((tarefa, index) => (                                    
                            <Text
                                style={theme.listItem}
                                key={index}
                                >{tarefa}</Text>
                        ))
                    }
                </ScrollView> */}
                <FlatList
                    data={toDoList}
                    renderItem={({item}) => <Item id={item.id} checked={item.checked} title={item.title} />}                
                    keyExtractor={item => item.id.toString()}
                />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderColor: colors.placeHolder,
    },
    itemTitle:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    checked: {
        paddingRight: 8,
    },
    title:{
        fontSize: 18,
        color: colors.black,
    },
    titleChecked: {
        fontSize: 18,
        opacity: 0.4,
        textDecorationLine: 'line-through',
    },
})