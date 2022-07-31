import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { ToDo } from '../../App';

interface Props {
  toDoList: ToDo[],
  toggleComplete: (idx:number) => void,
  removeToDo: (idx:number) => void
}
const ToDoList: React.FC<Props> = ({toDoList, toggleComplete, removeToDo}:Props) => {
  return (
    <>
      {toDoList.length === 0 && <Text style={styles.noItem}>아직 작성된 할일이 없습니다.</Text>}
      {toDoList.map((toDo: ToDo, index: number) => (
        <View style={styles.toDoItem} key={`${index}_${toDo.text}`}>
          <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => toggleComplete(index)}>
              <Image source={toDo.completed ? require('../../assets/activeCheckbox.png') : require('../../assets/checkbox.png')}></Image>
            </TouchableOpacity>
            <Text style={[styles.toDoText, toDo.completed && styles.completedToDo]}>{toDo.text}</Text>
          </View>
          <TouchableOpacity onPress={() => removeToDo(index)}>
            <Image source={require('../../assets/delete.png')}></Image>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  toDoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#999999',
    width: '100%',
    paddingHorizontal: 10,
  },
  toDoText: {
    fontSize: 16,
    color: '#242424',
    marginLeft: 15,
  },
  completedToDo: {
    textDecorationLine: 'line-through',
    color: '#999999'
  },
  noItem: {
    position: 'absolute',
    top: '50%'
  }
});

export default ToDoList;