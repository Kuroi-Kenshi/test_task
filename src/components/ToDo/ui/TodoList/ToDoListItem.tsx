import { ActionIcon, Flex, Group, Text } from '@mantine/core';
import { IconCircle, IconCircleCheck, IconX } from '@tabler/icons-react';
import { ToDoListItemIcon } from './ToDoListIcon';
import { ToDo, ToDoIdType } from '../../hooks/useToDo';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { UpdateToDoInput } from '../ToDoInput/UpdateToDoInput';

interface ToDoListItemProps {
  toDoItem: ToDo;
  onClickAction: (id: ToDoIdType) => void;
  deleteToDo: (id: ToDoIdType) => void;
  updateToDo: (toDoId: ToDoIdType, title: string) => void;
}

export const ToDoListItem: FC<ToDoListItemProps> = ({
  toDoItem,
  onClickAction,
  deleteToDo,
  updateToDo,
}) => {
  const [hovered, setHovered] = useState(false);
  const [editToDo, setEditToDo] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  const onDoubleClick = () => {
    setEditToDo(true);
  };

  const onFinishEdit = () => {
    setEditToDo(false);
  };

  useEffect(() => {
    if (itemRef.current) {
      itemRef.current.addEventListener('mouseenter', onMouseEnter);
      itemRef.current.addEventListener('mouseleave', onMouseLeave);

      return () => {
        itemRef.current?.removeEventListener('mouseenter', onMouseEnter);
        itemRef.current?.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, []);

  return (
    <Flex
      justify="space-between"
      ref={itemRef}
      data-testid={`${toDoItem.title}-itemContainer`}
      style={{
        borderBottom: '0.125rem solid #dee2e6',
        paddingBottom: '5px',
      }}
    >
      <Group>
        <ToDoListItemIcon
          onClick={() => onClickAction(toDoItem.id)}
          color={toDoItem.completed ? 'teal' : 'white'}
        >
          {toDoItem.completed ? (
            <IconCircleCheck
              size={'2rem'}
              color="white"
              data-testid={`${toDoItem.title}-itemCompleted`}
            />
          ) : (
            <IconCircle size={'2rem'} data-testid={`${toDoItem.title}-itemActive`} />
          )}
        </ToDoListItemIcon>
        <Text
          fz="md"
          td={toDoItem.completed ? 'line-through' : undefined}
          onDoubleClick={onDoubleClick}
          data-testid={`${toDoItem.title}-itemTitle`}
        >
          {editToDo ? (
            <UpdateToDoInput
              updateTodo={updateToDo}
              toToItem={toDoItem}
              onFinishEdit={onFinishEdit}
            />
          ) : (
            toDoItem.title
          )}
        </Text>
      </Group>
      {hovered ? (
        <ActionIcon
          size="xs"
          variant="transparent"
          onClick={() => deleteToDo(toDoItem.id)}
          data-testid={`${toDoItem.title}-removeItem`}
        >
          <IconX size="1.2rem" color="red" />
        </ActionIcon>
      ) : null}
    </Flex>
  );
};
