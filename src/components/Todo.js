import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet } from "react-native";

const Todo = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Todo.defaultProps = {
  title: "Novo padrão"
};

Todo.prototypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({});

export default Todo;
