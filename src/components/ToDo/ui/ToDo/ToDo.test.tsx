import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToDo } from './ToDo';

describe('ToDo test', () => {
  test('Should show initial ToDoItems', () => {
    render(<ToDo />);

    expect(screen.getByTestId('First-Task-itemTitle')).toBeDefined();
    expect(screen.getByTestId('Second-Task-itemTitle')).toBeDefined();
  });
});

describe('ToDoInput tests', () => {
  test('Should show ToDo component', async () => {
    render(<ToDo />);

    const toDoInput = screen.getByTestId('createToDoInput') as HTMLInputElement;

    await userEvent.type(toDoInput, 'TestToDO');

    expect(toDoInput.value).toBe('TestToDO');
  });
});

describe('CRUD toDo tests', () => {
  test('Should create new ToDo and show in list', async () => {
    render(<ToDo />);

    const toDoInput = screen.getByTestId('createToDoInput') as HTMLInputElement;
    const form = screen.getByTestId('CreateInputForm') as HTMLFormElement;
    expect(form).toBeDefined();

    await userEvent.type(toDoInput, 'TestToDO');

    await userEvent.type(toDoInput, '{enter}', { skipClick: true });

    await userEvent.clear(toDoInput);

    expect(screen.getByText('TestToDO')).toBeDefined();
  });

  test('Should update ToDo and show in list', async () => {
    render(<ToDo />);

    const toDoItem = screen.getByTestId('First-Task-itemTitle');
    await userEvent.dblClick(toDoItem);

    const form = screen.getByTestId('UpdateInputForm') as HTMLFormElement;
    expect(form).toBeDefined();

    const updateToDoInput = screen.getByTestId('updateToDoInput');

    await userEvent.clear(updateToDoInput);
    await userEvent.type(updateToDoInput, 'IPSec');
    await userEvent.type(updateToDoInput, '{enter}', { skipClick: true });

    const updatedToDoItem = screen.getByTestId('IPSec-itemTitle');
    expect(updatedToDoItem).toBeDefined();
  });

  test('Should show remove button', async () => {
    render(<ToDo />);

    const toDoItem = screen.getByTestId('Second-Task-itemContainer');
    await userEvent.hover(toDoItem);

    const removeButton = screen.getByTestId('Second-Task-removeItem');
    expect(removeButton).toBeDefined();
  });

  test('Should remove item', async () => {
    render(<ToDo />);

    const toDoItem = screen.getByTestId('First-Task-itemContainer');

    await userEvent.hover(toDoItem);
    const removeButton = screen.getByTestId('First-Task-removeItem');

    await userEvent.click(removeButton);
    const removedItem = screen.queryByTestId('First-Task-itemContainer');

    expect(removedItem).toBeNull();
  });
});

describe('ToDo complete toggle', () => {
  test('ToDo should be completed', async () => {
    render(<ToDo />);

    const toggleButton = screen.getByTestId('First-Task-itemActive');

    await userEvent.click(toggleButton);

    const firstTaskIsCompleted = screen.queryByTestId('First-Task-itemCompleted');

    expect(firstTaskIsCompleted).not.toBeNull();
  });

  test('ToDo should be active', async () => {
    render(<ToDo />);

    const toggleButton = screen.getByTestId('Second-Task-itemCompleted');

    await userEvent.click(toggleButton);

    const firstTaskIsCompleted = screen.queryByTestId('Second-Task-itemActive');

    expect(firstTaskIsCompleted).not.toBeNull();
  });
});

describe('ToDo list is Empty', () => {
  test('ToDo list should be is Empty', async () => {
    render(<ToDo />);

    const toggleButton = screen.getByTestId('First-Task-itemActive');
    await userEvent.click(toggleButton);

    const tabActive = screen.getByTestId('TabActive');
    await userEvent.click(tabActive);

    const emptyText = screen.queryByText('Empty');
    expect(emptyText).not.toBeNull();
  });
});
