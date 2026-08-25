import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput } from 'react-native';
import { FAB, Card, Checkbox, Button, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface Props {
  todos: Todo[];
  saveTodos: (todos: Todo[]) => void;
}

export default function TodoScreen({ todos, saveTodos }: Props) {
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title: input,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      saveTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const toggleTodo = (id: string) => {
    saveTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    saveTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={input}
          onChangeText={setInput}
          placeholderTextColor="#999"
        />
        <Button mode="contained" onPress={addTodo} style={styles.addButton}>
          Add
        </Button>
      </View>

      <ScrollView style={styles.list}>
        {todos.length === 0 ? (
          <Paragraph style={styles.empty}>No tasks yet. Add one to get started!</Paragraph>
        ) : (
          todos.map((todo) => (
            <Card key={todo.id} style={styles.todoCard}>
              <View style={styles.todoContent}>
                <Checkbox
                  status={todo.completed ? 'checked' : 'unchecked'}
                  onPress={() => toggleTodo(todo.id)}
                />
                <Paragraph
                  style={[
                    styles.todoText,
                    todo.completed && styles.completedText,
                  ]}
                >
                  {todo.title}
                </Paragraph>
                <MaterialCommunityIcons
                  name="delete"
                  size={20}
                  color="#f44336"
                  onPress={() => deleteTodo(todo.id)}
                  style={styles.deleteButton}
                />
              </View>
            </Card>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  addButton: {
    justifyContent: 'center',
  },
  list: {
    padding: 16,
  },
  todoCard: {
    marginBottom: 12,
    paddingVertical: 0,
  },
  todoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    padding: 8,
  },
  empty: {
    textAlign: 'center',
    marginTop: 32,
    color: '#999',
  },
});
