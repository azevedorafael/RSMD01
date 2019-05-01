import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { View, Text, StyleSheet } from 'react-native'

export default class Todo extends Component {
    static defaultProps = {
        title: 'Todo padrão'
    };

    static propTypes = {
        title: PropTypes.string,
    }

    render() {
        const { title } = this.props

        return (
            <View>
                <Text>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});