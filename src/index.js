import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Todo from './components/Todo'

export default class App extends Component {
  state = {
    usuario: 'Rafael',
    todos: [
      { id: 0, text: 'Fazer café' },
      { id: 1, text: 'Estudar o GONative' }
    ]
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos,
      { id: Math.random(), text: 'Novo todo' }]
    })
  }

  render() {
    const { todos, usuario } = this.state

    return (
      <View style={styles.container}>
        <Text>{usuario}</Text>
        {todos.map(todo => <Todo key={todo.id} title={todo.text} />)}
        <Button title="Add todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
