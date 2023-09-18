import { TextInput } from '@mantine/core';
import { ChangeEvent, FC, memo, useState } from 'react';

interface CreateToDoInputProps {
  addToDo: (title: string) => void;
}

export const CreateToDoInput: FC<CreateToDoInputProps> = memo(({ addToDo }) => {
  const [toDoName, setToDoName] = useState('');
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    addToDo(toDoName);
    setToDoName('');
  };

  return (
    <form onSubmit={onSubmit} data-testid="CreateInputForm">
      <TextInput
        data-testid="createToDoInput"
        placeholder="Введите название"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setToDoName(e.target.value)}
        value={toDoName}
        autoFocus={true}
        size="lg"
      />
    </form>
  );
});
