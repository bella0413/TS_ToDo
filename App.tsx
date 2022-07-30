import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View, TouchableOpacity, Image
} from 'react-native';
import Title from './src/components/Title';

interface ToDo {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<ToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);

  const createToDo = () => {
    if (value.trim())
      setToDos([...toDoList, { text: value, completed: false }]);
    else showError(true);
    setValue("");
  };

  const removeToDo = (index: number) => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  const toggleComplete = (index: number) => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Title></Title>
        <View style={styles.form}>
          <TextInput style={[styles.inputBox, error&& styles.error]} placeholder="할일을 입력하세요" placeholderTextColor="#969696" value={value}
          onChangeText={e => {
            setValue(e);
            showError(false);
          }}></TextInput>
          <TouchableHighlight style={styles.inputBtn} activeOpacity={0.8} underlayColor={'#CBE2E3'} onPress={createToDo}>
            <Text style={styles.inputBtnText}>입력</Text>
          </TouchableHighlight>
        </View>
        {toDoList.length === 0 && <Text style={styles.noItem}>아직 작성된 할일이 없습니다.</Text>}
        {toDoList.map((toDo: ToDo, index: number) => (
        <View style={styles.toDoItem} key={`${index}_${toDo.text}`}>
          <View style={{justifyContent:'flex-start', flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity onPress={() => toggleComplete(index)}>
              <Image source={toDo.completed ? require('./assets/activeCheckbox.png'): require('./assets/checkbox.png')}></Image>
            </TouchableOpacity>
            <Text style={[styles.toDoText, toDo.completed && styles.completedToDo]}>{toDo.text}</Text>
          </View>
          <TouchableOpacity onPress={() => removeToDo(index)}>
            <Image source={require('./assets/delete.png')}></Image>
          </TouchableOpacity>
        </View>
      ))}
     </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 27
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#999999',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '80%',
    height: 44,
    paddingLeft: 15
  },
  inputBtn: {
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: '#6B7B7C',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '20%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBtnText: {
    color: '#5B6B6C',
    fontSize: 16
  },
  form: {
    flexDirection: 'row'
  },
  error: {
    borderColor: "#F55454",
  },
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

export default App;
