import { useState } from 'react';
import Head from 'next/head';
import { MdAdd } from 'react-icons/md';

import { ListCard, ListModal } from '~/components';

import { Container, CreateBtn } from './styles';
import { GlobalPageProps } from './_app';

const Home = ({ user }: GlobalPageProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Head>
        <title>Minhas listas</title>
      </Head>
      <div className="grid">
        <div className="header">
          <h2>Minhas listas</h2>
          <CreateBtn onClick={() => setVisible(true)}>
            <MdAdd />
          </CreateBtn>
        </div>
        {user.lists.map(item => (
          <ListCard
            key={item.id}
            id={item.id}
            title={item.title || 'Sem nome'}
            totalItems={item.totalItems}
            doneItems={item.doneItems}
          />
        ))}
      </div>
      <ListModal
        type="create"
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </Container>
  );
};

export default Home;
