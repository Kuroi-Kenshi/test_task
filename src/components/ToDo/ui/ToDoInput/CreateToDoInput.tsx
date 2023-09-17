import { TextInput } from '@mantine/core';
import { ChangeEvent, FC, useState } from 'react';

interface CreateToDoInputProps {
  addToDo: (title: string) => void;
}

export const CreateToDoInput: FC<CreateToDoInputProps> = ({ addToDo }) => {
  const [toDoName, setToDoName] = useState('');
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    addToDo(toDoName);
  };

  return (
    <form onSubmit={onSubmit} data-testid="CreateInputForm">
      <TextInput
        data-testid="createToDoInput"
        placeholder="Введите название"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setToDoName(e.target.value)}
        autoFocus={true}
        size="lg"
      />
    </form>
  );
};
