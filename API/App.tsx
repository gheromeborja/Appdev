import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";

// constant api
const apiURL = "https://mocki.io/v1/2d6a7ef7-a2d1-4b3c-b48b-f28010699fd4";

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

// fetch data from api
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.products);
        setTitle(json.title);
        setDescription(json.description);
      })
      .catch((error) => alert(error)) 
      .finally(() => setLoading(false)); 
  }, []);

// condition
  async function getproductsAsync() {
    try {
      let response = await fetch(apiURL);
      let json = await response.json(); 
      setData(json.products);
      setTitle(json.title);
      setDescription(json.description);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }
// screen appearance
  return (
    <SafeAreaView style={styles.container}>
      {}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {}
          <Text style={styles.title}>{title}</Text>
          {}
          <View style={{ borderBottomWidth: 1, marginBottom: 12 }}></View>
          <FlatList
            data={data}
            keyExtractor={({ products }, index) => products}
            renderItem={({ item }) => (
              <View style={{ paddingBottom: 10 }}>
                <Text style={styles.movieText}>
                  {item.id}. {item.title}, {item.releaseYear}
                </Text>
              </View>
            )}
          />
          {}
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#EEDC5C',
  },
  movieText: {
    fontSize: 30,
    fontWeight: "200",
    color: "Black",
    fontFamily: "Times New Roman"
  },
  title: {
    marginTop: 15,
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Helvetica"
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bolder",
    color: "red",
  },
});

export default App;
