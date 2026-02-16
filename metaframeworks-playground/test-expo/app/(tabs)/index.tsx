import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";


export default function Home() {
  const [items, setItems] = useState<any[]>([]);



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        const firstTen = data.slice(0, 10);
        setItems(firstTen);
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
