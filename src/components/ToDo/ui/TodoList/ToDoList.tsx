import { Stack, Text } from '@mantine/core';
import { IToDo, ToDoIdType } from '../../hooks/useToDo';
import { FC } from 'react';
import { ToDoListItem } from './ToDoListItem';

interface ToDoList {
  toDoList: IToDo[];
  completeToDo: (toDoId: ToDoIdType) => void;
  unCompleteToDo: (toDoId: ToDoIdType) => void;
  deleteToDo: (toDoId: ToDoIdType) => void;
  updateToDo: (toDoId: ToDoIdType, title: string) => void;
}

export const ToDoList: FC<ToDoList> = ({
  toDoList,
  completeToDo,
  unCompleteToDo,
  deleteToDo,
  updateToDo,
}) => {
  if (!toDoList.length)
    return (
      <Text align="center" color="#96999d">
        Empty
      </Text>
    );

  return (
    <Stack h={300} data-testid="toDoList">
      {toDoList.map((toDo) => {
        const action = toDo.completed ? unCompleteToDo : completeToDo;
        return (
          <ToDoListItem
            key={toDo.id}
            toDoItem={toDo}
            deleteToDo={deleteToDo}
            onClickAction={action}
            updateToDo={updateToDo}
          />
        );
      })}
    </Stack>
  );
};
