import { todo } from "@/app/types/todo";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = {
  todo: todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};
export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggle(todo.id)}>
        <Text style={[todo.completed && styles.completed]}>{todo.text}</Text>
      </TouchableOpacity>
      <Button title="X" onPress={() => onDelete(todo.id)} color={"red"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    rowGap: 16,
  },

  completed: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  delButton: {
    backgroundColor: "red",
  },
});
