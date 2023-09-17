import { Container, MantineProvider } from '@mantine/core';
import { Header } from '@components/Header';
import { ToDo } from '@components/ToDo';

export function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container h="100vh" pt="lg">
        <Header title="TODO App" />
        <ToDo />
      </Container>
    </MantineProvider>
  );
}
