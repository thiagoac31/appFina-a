import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions'

const list = [
  {
    id: 1,
    label: "boleto",
    value: "300,00",
    date: "17/10/2024",
    type: 0 //expense
  },
  {
    id: 2,
    label: "Pix",
    value: "300,00",
    date: "17/10/2024",
    type: 1 //balance
  },
  {
    id: 3,
    label: "boleto",
    value: "300,00",
    date: "17/10/2024",
    type: 0
  },
]



export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Thiago Cavalcante"/>
      <Balance balance="5000" expense="1000"/>
      <Actions/>
      <Text style={styles.title}>Ultimas movimentações</Text>
      <FlatList 
        style={styles.list} 
        data={list} 
        keyExtractor={(item) => String(item.id)} 
        showsHorizontalScrollIndicator={false} 
        renderItem={({item}) => <Movements data={item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
