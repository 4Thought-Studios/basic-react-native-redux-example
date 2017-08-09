import React from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { createMovie } from '../store/modules/movies';

class AddScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Add New Movie',
    });

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            releaseYear: '',
            details: '',
        };
    }

    render() {
        const readyToSubmit = () => (
            this.state.title !== ''
            && this.state.releaseYear !== ''
            && this.state.details !== ''
        );
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    onChangeText={(title) => this.setState({ title })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Release Year"
                    onChangeText={(releaseYear) => this.setState({ releaseYear })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Details"
                    onChangeText={(details) => this.setState({ details })}
                />
                <Button 
                    title="Create"
                    disabled={
                           this.state.title === '' 
                        || this.state.releaseYear === ''
                        || this.state.details === ''
                    }
                    onPress={() => {
                        this.props.createMovie(this.state);
                        this.props.navigation.goBack();
                    }} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    input: {
        height: 40,
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20,
    }
});

const mapActionsToProps = (dispatch) => (
    {
        createMovie: (movie) => dispatch(createMovie(movie))
    }
);

export default connect(null, mapActionsToProps)(AddScreen);