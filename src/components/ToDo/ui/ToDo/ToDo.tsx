import { Container, Tabs } from '@mantine/core';
import { FC } from 'react';
import { useToDos, IToDo } from '../../hooks/useToDo';
import { CreateToDoInput } from '../ToDoInput/CreateToDoInput';
import { TabList } from './TabList';
import { ListData, TabPanelList } from './TabPanelList';

const initialTasks: IToDo[] = [
  { id: 1, title: 'First-Task', completed: false },
  { id: 2, title: 'Second-Task', completed: true },
];

export const ToDo: FC = () => {
  const {
    addTodo,
    completeTodo,
    completedList,
    deleteTodo,
    updateTodo,
    toDoList,
    unCompleteTodo,
    activeList,
  } = useToDos(initialTasks);

  const tabListData: ListData[] = [
    { value: 'all', data: toDoList },
    { value: 'active', data: activeList },
    { value: 'completed', data: completedList },
  ];

  return (
    <Container size={'25rem'}>
      <CreateToDoInput addToDo={addTodo} />

      <Tabs defaultValue="all" keepMounted={false}>
        <TabList activeCount={activeList.length} completedCount={completedList.length} />
        <TabPanelList
          listData={tabListData}
          completeToDo={completeTodo}
          unCompleteToDo={unCompleteTodo}
          deleteToDo={deleteTodo}
          updateToDo={updateTodo}
        />
      </Tabs>
    </Container>
  );
};
