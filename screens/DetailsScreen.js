import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    render() {
        const movie = this.props.movie;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.year}>{movie.releaseYear}</Text>
                <Text style={styles.summary}>{movie.details}</Text>
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
    title: {
        fontSize: 20
    },
    year: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 10
    },
    summary: {
        
    },
});

const mapStateToProps = (store, ownProps) => (
    {
        movie: store.movies.filter((m) => m.key === ownProps.navigation.state.params.movieKey)[0]
    }
);

export default connect(mapStateToProps)(DetailsScreen);