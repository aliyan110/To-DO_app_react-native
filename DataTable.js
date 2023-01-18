import React from "react";
import { StyleSheet,Text } from "react-native";
import { DataTable } from "react-native-paper";

const Table = () => {
    return(
        <DataTable style={styles.Table}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title>Task</DataTable.Title>
                <DataTable.Title>Description</DataTable.Title>
                <DataTable.Title>Deadline</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
                <DataTable.Cell>React Native Setup</DataTable.Cell>
                <DataTable.Cell style={{flexDirection: 'row',flex: 1, flexWrap: 'wrap'}} numberOfLines={3}><Text>Set up react native application in your laptop and run a test app to ensure that installation is proper</Text></DataTable.Cell>
                <DataTable.Cell>13th January,2022</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>To do Application</DataTable.Cell>
                <DataTable.Cell>Have to make a simple to do application in which a certain task can be inserted</DataTable.Cell>
                <DataTable.Cell>14th January,2022</DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    );
};

export default Table;
const styles = StyleSheet.create({
    container:{
        padding: 15,
    },
    tableHeader:{
        backgroundColor: '#808080',
    },
});