import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
 } from 'react-native'

export default function Balance(props) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currentSymbol}>R$</Text>
                    <Text style={styles.balance}>{props.balance}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currentSymbol}>R$</Text>
                    <Text style={styles.expenses}>{props.expense}</Text>
                </View>
            </View>

        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    item: {
        fontSize: 20,
        color: "#DADADA"
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    currentSymbol: {
        color: "#DADADA",
        marginRight: 6,
    },
    balance: {
        fontSize: 22,
        color: "#2ecc71",
    },
    expenses: {
        fontSize: 22,
        color: "#e74c3c"
    }
})