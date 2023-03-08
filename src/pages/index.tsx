import { GetServerSideProps } from 'next';

import { ListCard } from '~/components';
import { getAllLists, ListShortData } from '~/services';

import { Container, Lists } from './styles';

type HomeProps = {
  lists: ListShortData[];
};

const Home = ({ lists }: HomeProps) => {
  return (
    <Container>
      <header>
        <h1>Planner</h1>
      </header>
      <main>
        <h2>Minhas listas</h2>
        {lists.map(item => (
          <ListCard
            title={item.title}
            totalItems={item.totalItems}
            doneItems={item.doneItems}
          />
        ))}
      </main>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const lists = await getAllLists();

  return {
    props: {
      lists,
    },
  };
};

export default Home;
