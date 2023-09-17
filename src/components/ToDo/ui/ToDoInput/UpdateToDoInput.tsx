import { TextInput } from '@mantine/core';
import { ChangeEvent, FC, useState } from 'react';
import { ToDo, ToDoIdType } from '../../hooks/useToDo';

interface UpdateToDoInputProps {
  updateTodo: (id: ToDoIdType, title: string) => void;
  toToItem: ToDo;
  onFinishEdit: () => void;
}

export const UpdateToDoInput: FC<UpdateToDoInputProps> = ({
  updateTodo,
  toToItem,
  onFinishEdit,
}) => {
  const [toDoName, setToDoName] = useState(toToItem.title);
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    onFinishEdit();
    updateTodo(toToItem.id, toDoName);
  };

  return (
    <form onSubmit={onSubmit} data-testid="UpdateInputForm">
      <TextInput
        data-testid="updateToDoInput"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setToDoName(e.target.value)}
        autoFocus={true}
        value={toDoName}
        size="sm"
      />
    </form>
  );
};
