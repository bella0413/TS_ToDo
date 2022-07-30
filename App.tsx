import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Title from './src/components/Title';

const App: React.FC = () => {

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Title></Title>
        <View style={styles.form}>
          <TextInput style={styles.inputBox}></TextInput>
          <TouchableHighlight style={styles.inputBtn} activeOpacity={0.8} underlayColor={'#CBE2E3'} onPress={()=>{console.log('press')}}>
            <Text style={styles.inputBtnText}>입력</Text>
          </TouchableHighlight>
        </View>
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
    color: '#5B6B6C'
  },
  form: {
    flexDirection: 'row'
  }
});

export default App;
