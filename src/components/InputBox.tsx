import React, { Dispatch, SetStateAction } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';

interface Props {
  error: boolean,
  value: string,
  setError: Dispatch<SetStateAction<boolean>>,
  setValue: Dispatch<SetStateAction<string>>,
  createToDo: () => void
}
const InputBox: React.FC<Props> = ({error, value, setValue, setError, createToDo}:Props) => {
  return (
    <View style={styles.form}>
      <TextInput style={[styles.inputBox, error&& styles.error]} placeholder="할일을 입력하세요" placeholderTextColor="#969696" value={value}
      onChangeText={e => {
        setValue(e);
        setError(false);
      }}></TextInput>
      <TouchableHighlight style={styles.inputBtn} activeOpacity={0.8} underlayColor={'#CBE2E3'} onPress={createToDo}>
        <Text style={styles.inputBtnText}>입력</Text>
      </TouchableHighlight>
  </View>
  );
}

const styles = StyleSheet.create({
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
});

export default InputBox;