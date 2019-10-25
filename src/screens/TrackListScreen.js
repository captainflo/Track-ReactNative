import React, { useContext } from "react";
import { StyleSheet, FlatList, Image } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContent } from "../context/TrackContext";
import { ListItem, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContent);
  console.log(state);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Image style={styles.image} source={require('../image/run.jpg')} />
      <Text style={styles.middle} h4>List of All Your Track:</Text>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem style={styles.box} chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}

const styles = StyleSheet.create({
  image: {
    maxWidth: 400,
    height: 150,
    marginBottom: 5
  },
  middle: {
    textAlign: "center"
  },
  box:{
    borderBottomColor: '#f9f9f9',
    borderBottomWidth: 2
  }
});

export default TrackListScreen;
