import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import InputBox from './src/components/InputBox';
import Title from './src/components/Title';
import ToDoList from './src/components/ToDoList';

export interface ToDo {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<ToDo[]>([]);
  const [error, setError] = useState<boolean>(false);

  const createToDo = () => {
    if (value.trim())
      setToDos([...toDoList, { text: value, completed: false }]);
    else setError(true);
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
        <InputBox error={error} value={value} setError={setError} setValue={setValue} createToDo={createToDo}></InputBox>
        <ToDoList toDoList={toDoList} toggleComplete={toggleComplete} removeToDo={removeToDo}></ToDoList>
     </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 27
  }
});

export default App;
