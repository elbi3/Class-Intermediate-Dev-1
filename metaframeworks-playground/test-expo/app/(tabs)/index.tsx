import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import * as Notifications from "expo-notifications";

export default function Home() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        const firstTen = data.slice(0, 10);
        setItems(firstTen);

        // Trigger local notification after loading
        Notifications.scheduleNotificationAsync({
          content: {
            title: "Items Loaded",
            body: "New items have been added to the list.",
          },
          trigger: null,
        });
      });
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ marginBottom: 10 }}>
            {item.title}
          </Text>
        )}
      />
    </View>
  );
}
