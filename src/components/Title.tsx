import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title: React.FC = () => {
  return (
      <Text style={styles.title}>To-do List</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingVertical: 40,
    fontSize: 36,
    color: '#000000'
  },
});

export default Title;