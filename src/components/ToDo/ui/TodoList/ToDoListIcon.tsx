import { ActionIcon, ThemeIcon } from '@mantine/core';
import { FC, ReactNode } from 'react';

interface ToDoListItemIconProps {
  children: ReactNode;
  onClick: () => void;
  color: 'teal' | 'white';
}

export const ToDoListItemIcon: FC<ToDoListItemIconProps> = ({ color, onClick, children }) => {
  return (
    <ThemeIcon size={24} radius="xl" color={color}>
      <ActionIcon variant="transparent" onClick={onClick}>
        {children}
      </ActionIcon>
    </ThemeIcon>
  );
};
