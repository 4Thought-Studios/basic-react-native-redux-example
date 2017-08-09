import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import movies from '../movies.json';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={movies}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { item })}style={styles.itemContainer}>
                            <View style={styles.itemDetails}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.year}>{item.releaseYear}</Text>
                            </View>
                            <Text style={styles.arrow}>></Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemDetails: {

    },
    title: {

    },
    year: {
        fontSize: 14,
        color: 'gray',
    },
    arrow: {
        color: 'gray',
        fontSize: 20
    }
});

export default HomeScreen;