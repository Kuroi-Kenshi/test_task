import { Badge, Tabs } from '@mantine/core';
import { FC } from 'react';

interface TabListProps {
  activeCount: number;
  completedCount: number;
}

export const TabList: FC<TabListProps> = ({ activeCount, completedCount }) => {
  return (
    <Tabs.List>
      <Tabs.Tab value="all" data-testid="TabAll">
        All
      </Tabs.Tab>
      <Tabs.Tab
        value="active"
        data-testid="TabActive"
        rightSection={
          <Badge w={16} h={16} sx={{ pointerEvents: 'none' }} variant="filled" size="xs" p={0}>
            {activeCount}
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
            {completedCount}
          </Badge>
        }
      >
        Completed
      </Tabs.Tab>
    </Tabs.List>
  );
};
