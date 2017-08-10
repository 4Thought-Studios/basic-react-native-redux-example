import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import { createMovie } from '../store/modules/movies';

class CreateNewMovieScreen extends React.Component {
    static navigationOptions = {
        title: 'Create',
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            releaseYear: '',
            details: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    onChangeText={(title) => this.setState({title})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Release Year"
                    onChangeText={(releaseYear) => this.setState({releaseYear})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Details"
                    onChangeText={(details) => this.setState({details})}
                />
                <Button
                    disabled={
                           this.state.title === ''
                        || this.state.releaseYear === ''
                        || this.state.details === ''
                    }
                    title="Create"
                    onPress={() => {
                        // Create the fucker
                        this.props.create(this.state)
                        // Navigate back
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
        backgroundColor: 'white',
        padding: 10,
    },
    input: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'black',
        padding: 5,
        marginBottom: 10,
    }
});

const mapDispatchToProps = (dispatch) => (
    {
        create: (movie) => dispatch(createMovie(movie))
    }
); 

export default connect(null, mapDispatchToProps)(CreateNewMovieScreen);