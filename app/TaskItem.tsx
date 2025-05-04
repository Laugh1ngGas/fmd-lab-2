import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

type TaskItemProps = {
  taskText: string;
  onDelete: () => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ taskText, onDelete }) => {
  return (
    <View style={styles.item}>
      <Text>{taskText}</Text>
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
  },
});

export default TaskItem;
