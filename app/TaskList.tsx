import React, { useState } from 'react';
import { View, FlatList, Button, TextInput, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskText, setTaskText] = useState<string>('');

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={taskText}
        onChangeText={setTaskText}
        placeholder="Enter a task"
      />
      <Button title="Add Task" onPress={addTask} />
      
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem taskText={item} onDelete={() => deleteTask(index)} />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default TaskList;
