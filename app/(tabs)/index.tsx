import TodoItem from "@/components/TodoItem";
import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { todo } from "../types/todo";
export default function HomeScreen() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<todo[]>([]);

  const addTodo = () => {
    if (text.trim() === "") return;
    const newTodo: todo = {
      id: Date.now().toString(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log(" todo ", [...todos, newTodo]);
  };

  const onDelete = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  const onToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((item) =>
        item?.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleContainer}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="add new to-do"
          value={text}
          style={styles.textInput}
          onChangeText={setText}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem todo={item} onDelete={onDelete} onToggle={onToggle} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    margin: 15,
  },
  inputContainer: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
