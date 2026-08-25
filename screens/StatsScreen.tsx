import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface Props {
  todos: Todo[];
}

export default function StatsScreen({ todos }: Props) {
  const completed = todos.filter((t) => t.completed).length;
  const total = todos.length;
  const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Task Statistics</Title>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.label}>Total Tasks</Paragraph>
          <Title style={styles.statValue}>{total}</Title>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.label}>Completed</Paragraph>
          <Title style={styles.statValue}>{completed}</Title>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.label}>Completion Rate</Paragraph>
          <Title style={styles.statValue}>{completionRate}%</Title>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.label}>Pending</Paragraph>
          <Title style={styles.statValue}>{total - completed}</Title>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    color: '#666',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6200ee',
  },
});
