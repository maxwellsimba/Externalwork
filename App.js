import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'Pork',
    },
    {
      id: uuid(),
      text: 'Mutton',
    },
    {
      id: uuid(),
      text: 'Collard',
    },
    {
      id: uuid(),
      text: 'Juice',
    },
     
    {
      id: uuid(),
      text: 'Avocadoes',
    },

  ]);
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };
  const addItem = (text) =>{
    if (!text){
      Alert.alert('Error', 'please enter an item', {text:'Ok'});
    }else{
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
    
  }

  return(
    <View style={StyleSheet.container}>
      <Header/>
      <AddItem  addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item})=> (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />

    </View>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop:60,
    },
  }); 

  export default App;
