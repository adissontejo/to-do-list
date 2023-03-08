import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { MdAdd } from 'react-icons/md';

import { CreateList, ListCard } from '~/components';
import { getAllLists, ListShortData } from '~/services';

import { Container, CreateBtn } from './styles';

type HomeProps = {
  lists: ListShortData[];
};

const Home = ({ lists }: HomeProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CreateList visible={visible} onClose={() => setVisible(false)} />
      <Container>
        <header>
          <h1>Planner</h1>
        </header>
        <main>
          <div className="header">
            <h2>Minhas listas</h2>
            <CreateBtn onClick={() => setVisible(true)}>
              <MdAdd />
            </CreateBtn>
          </div>
          {lists.map(item => (
            <ListCard
              key={item.id}
              id={item.id}
              title={item.title || 'Sem nome'}
              totalItems={item.totalItems}
              doneItems={item.doneItems}
            />
          ))}
        </main>
      </Container>
    </>
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
