import { FC } from 'react';
import { Title, Box } from '@mantine/core';

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Box mb="18px">
      <Title align="center" opacity="0.8">
        {title}
      </Title>
    </Box>
  );
};
