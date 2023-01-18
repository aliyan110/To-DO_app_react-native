import React, { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native'
import { useFonts } from 'expo-font';

let taskArray = [
    {key: '1', task: "Setup React Native and environment variable"},
    {key: '2', task: "Create a To-do application in react native"}
]

const screen = function taskInputScreen( {navigation} ) {
    
    const [ task, setTask ] = useState('')
    
    const addTask = ()=>{
        if(task == "")return

        taskArray.push({key: (taskArray.length + 1).toString(), task})
        setTask('')
    }

    const logInput = (input)=>{
        setTask(input)
    }

    const renderTask = ({ item }) => {
        return(
        <TouchableOpacity style={styles.listItem}>
            <Text style={styles.buttonText}>{`${item.task}`}</Text>
        </TouchableOpacity>)
    }

    return (
        <View
        style={styles.background}>
            <TextInput
            style={styles.input}
            keyboardAppearance={'dark'}
            onChangeText={logInput}
            value={task}
            />

            <TouchableOpacity
            style={styles.addButton}
            onPress={addTask}>
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>

            <Text style={styles.listItemTitle}>My Tasks:</Text>
        
            <FlatList
            data={taskArray}
            renderItem={renderTask}
            style={styles.flatList}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'grey',
        paddingTop: Platform.OS === "android" ? 25:0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    input: {
        marginTop:40,
        color:'white',
        fontSize:18,
        backgroundColor: "#2e2a2a",
        height: 50,
        width: '90%',
        textDecorationColor: "white",
        borderColor: 'black',
        borderWidth: 2,
    },
    flatList:{
        width: "100%",
        textAlign: "left",
        alignSelf: 'flex-start'
    },
    listItem: {
        width: "100%",
        height: 50,
        backgroundColor: "#2e2e2e",
        justifyContent: "center",
        alignSelf: 'flex-start',
        textAlign: 'left',
        fontSize: 12
    },
    listItemTitle: {
        color: "white",
        textAlign: 'left',
        alignSelf: 'flex-start',
        fontSize: 25,
        fontWeight: "bold",
        padding: 10,
        fontFamily: 'lobster',
    },
    addButton: {
        justifyContent: "center",
        width: "50%",
        height: 50,
        backgroundColor: "green",
        borderRadius: 25,
        marginHorizontal: 20,
        marginVertical: 10,
        alignSelf: 'flex-end'
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
    }
})

export default screen;
