import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { MdAdd } from 'react-icons/md';

import { ListCard, ListModal } from '~/components';
import { getAllLists, ListData } from '~/services';

import { Container, CreateBtn } from './styles';

type HomeProps = {
  lists: ListData[];
};

const Home = ({ lists }: HomeProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ListModal
        type="create"
        visible={visible}
        onClose={() => setVisible(false)}
      />
      <Container>
        <div className="grid">
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
        </div>
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
