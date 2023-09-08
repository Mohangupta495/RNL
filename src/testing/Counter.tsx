import React from 'react';
import {useAppSelector, useAppDispatch} from '../redux/hooks';
import {decrement, increment} from '../redux/counterSlice';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import { addText, cleanMessage } from '../redux/inputSlice';

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const message = useAppSelector(state => state.input.message);
  const dispatch = useAppDispatch();
  return (
    <View style={{backgroundColor: 'red'}}>
      <Button
        onPress={() => {
          dispatch(increment());
        }}>
        increment
      </Button>
      <Text style={styles.bigBlue}>Counter{count}</Text>
      <Button
        onPress={() => {
          dispatch(decrement());
        }}>
        Decrement
      </Button>
      <Text>{message}</Text>
      <TextInput
        style={{height: 40, backgroundColor: 'azure', fontSize: 20}}
        placeholder="Type here to translate!"
        onChangeText={text => dispatch(addText(text))}
        value={message}
      />
      <Button onPress={()=>{dispatch(cleanMessage())}}>Clean Text</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default Counter;
