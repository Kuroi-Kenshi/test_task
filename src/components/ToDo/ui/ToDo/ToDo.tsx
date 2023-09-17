import { Badge, Container, Tabs } from '@mantine/core';
import { FC } from 'react';
import { useToDos, ToDo as IToDo } from '../../hooks/useToDo';
import { CreateToDoInput } from '../ToDoInput/CreateToDoInput';
import { ToDoList } from '../TodoList/ToDoList';

export const ToDo: FC = () => {
  const initialTasks: IToDo[] = [
    { id: 1, title: 'First-Task', completed: false },
    { id: 2, title: 'Second-Task', completed: true },
  ];
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

  return (
    <Container size={'25rem'}>
      <CreateToDoInput addToDo={addTodo} />

      <Tabs defaultValue="all" keepMounted={false}>
        <Tabs.List>
          <Tabs.Tab value="all" data-testid="TabAll">
            All
          </Tabs.Tab>
          <Tabs.Tab
            value="active"
            data-testid="TabActive"
            rightSection={
              <Badge w={16} h={16} sx={{ pointerEvents: 'none' }} variant="filled" size="xs" p={0}>
                {activeList.length}
              </Badge>
            }
          >
            Active
          </Tabs.Tab>
          <Tabs.Tab
            value="completed"
            data-testid="TabCompleted"
            rightSection={
              <Badge w={16} h={16} sx={{ pointerEvents: 'none' }} variant="filled" size="xs" p={0}>
                {completedList.length}
              </Badge>
            }
          >
            Completed
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="all" pt="xs">
          <ToDoList
            toDoList={toDoList}
            completeToDo={completeTodo}
            unCompleteToDo={unCompleteTodo}
            deleteToDo={deleteTodo}
            updateToDo={updateTodo}
          />
        </Tabs.Panel>
        <Tabs.Panel value="active" pt="xs">
          <ToDoList
            toDoList={activeList}
            completeToDo={completeTodo}
            unCompleteToDo={unCompleteTodo}
            deleteToDo={deleteTodo}
            updateToDo={updateTodo}
          />
        </Tabs.Panel>
        <Tabs.Panel value="completed" pt="xs">
          <ToDoList
            toDoList={completedList}
            completeToDo={completeTodo}
            unCompleteToDo={unCompleteTodo}
            deleteToDo={deleteTodo}
            updateToDo={updateTodo}
          />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
