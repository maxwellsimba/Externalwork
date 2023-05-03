import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  
  return (

    <TouchableOpacity  style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
          name="remove" 
          size={20} 
          color="firebrick"
          onPress={() => deleteItem(item.id)} 
          
        />
      </View>
      
    </TouchableOpacity>
   

  );
  
  
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f6f6f6',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 20,
  },
  checkedItemText: {
    fontSize: 20,
    textDecorationLine: 'line-through',
    color: 'green',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 70,
  },
  editItemInput: {
    padding: 0,
    fontSize: 20,
  },
});

export default ListItem;
