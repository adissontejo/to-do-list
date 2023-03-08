import { GetServerSideProps } from 'next';

import { getList, ListDetailedData } from '~/services';

import { Container } from './styles';

type ListProps = {
  list: ListDetailedData;
};

const List = () => {
  return <Container></Container>;
};

export const getServerSideProps: GetServerSideProps<ListProps> = async ({
  params,
}) => {
  const list = await getList(Number(params.listId));

  return {
    props: {
      list,
    },
  };
};

export default List;
