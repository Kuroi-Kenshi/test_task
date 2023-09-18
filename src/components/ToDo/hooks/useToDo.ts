import { useCallback, useState } from 'react';

export interface IToDo {
  id: number;
  title: string;
  completed: boolean;
}

export type ToDoIdType = IToDo['id'];

export function useToDos(initialToDos?: IToDo[]) {
  const [toDoList, setToDoList] = useState<IToDo[]>(initialToDos || []);

  const activeList = toDoList.filter((todo) => !todo.completed);
  const completedList = toDoList.filter((todo) => todo.completed);

  const addTodo = useCallback((toDoTitle: string) => {
    const currentDate = new Date();
    const id = currentDate.getTime();
    setToDoList((prev) => [...prev, { id, title: toDoTitle, completed: false }]);
  }, []);

  const completeTodo = useCallback((id: ToDoIdType) => {
    setToDoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          const changedToDo = { ...todo, completed: true };
          return changedToDo;
        }
        return todo;
      })
    );
  }, []);

  const unCompleteTodo = useCallback((id: ToDoIdType) => {
    setToDoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          const changedToDo = { ...todo, completed: false };
          return changedToDo;
        }
        return todo;
      })
    );
  }, []);

  const updateTodo = useCallback((id: ToDoIdType, newTitle: string) => {
    setToDoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newTitle };
        }
        return todo;
      })
    );
  }, []);

  const deleteTodo = useCallback((id: ToDoIdType) => {
    setToDoList((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return {
    toDoList,
    completedList,
    activeList,
    addTodo,
    updateTodo,
    completeTodo,
    unCompleteTodo,
    deleteTodo,
  };
}
