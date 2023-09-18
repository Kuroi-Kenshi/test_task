import { FC } from 'react';
import { Tabs } from '@mantine/core';
import { ToDoList } from '../TodoList/ToDoList';
import { IToDo } from '../../hooks/useToDo';

export interface ListData {
  value: 'all' | 'active' | 'completed';
  data: IToDo[];
}

interface TabPanelListProps {
  listData: ListData[];
  completeToDo: (id: number) => void;
  unCompleteToDo: (id: number) => void;
  deleteToDo: (id: number) => void;
  updateToDo: (id: number, newTitle: string) => void;
}

export const TabPanelList: FC<TabPanelListProps> = ({
  listData,
  completeToDo,
  unCompleteToDo,
  deleteToDo,
  updateToDo,
}) => {
  return listData.map(({ value, data }) => {
    return (
      <Tabs.Panel key={value} value={value} pt="xs">
        <ToDoList
          toDoList={data}
          completeToDo={completeToDo}
          unCompleteToDo={unCompleteToDo}
          deleteToDo={deleteToDo}
          updateToDo={updateToDo}
        />
      </Tabs.Panel>
    );
  });
};
