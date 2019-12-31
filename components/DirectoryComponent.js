import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'; 

function Directory(props) {
    //item 
    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/react-lake.jpg')}} 
            />
        );
    };

    return (
        //wrap around all the ListItem and return FlatList components
        <FlatList 
            data={props.campsites} //where we are getting the data from 
            renderItem={renderDirectoryItem} //specify how to render each item on the list
            keyExtractor={item => item.id.toString()} //grab id from each item and convert to string
        />
    );
}

export default Directory;