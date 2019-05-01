import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Todo from './components/Todo'

export default class App extends Component {
  state = {
    usuario: 'Rafael',
    counter: 0,
    todos: [
      { id: 0, text: 'Fazer café' },
      { id: 1, text: 'Estudar o GONative' }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: 'Hello world' });
    }, 3000)
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return { text: nextProps.text }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 5;
  }

  // componentDidUpdate (prevProps, prevState)  {

  // }

  // componentWillMount() {

  // }

  handleAddCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos,
      { id: Math.random(), text: 'Novo todo' }]
    })
  }

  render() {
    const { todos, usuario, text, counter } = this.state

    return (
      <View style={styles.container}>
        <Text>{text}</Text>
        <Text>{usuario}</Text>
        {todos.map(todo => <Todo key={todo.id} title={todo.text} />)}
        <Button title="Add todo" onPress={this.addTodo} />
        <Text>{counter}</Text>
        <Button title="Counter" onPress={this.handleAddCounter} />
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
