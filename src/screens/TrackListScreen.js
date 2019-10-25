import React, { useContext } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContent } from "../context/TrackContext";
import { ListItem } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContent);
  console.log(state);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
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
              <ListItem chevron title={item.name} />
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

const styles = StyleSheet.create({});

export default TrackListScreen;
