import { useRouter } from 'next/router';

import { Container, Footer } from './styles';

export type ListCardProps = {
  id: number;
  title: string;
  totalItems: number;
  doneItems: number;
};

export const ListCard = ({
  id,
  title,
  totalItems,
  doneItems,
}: ListCardProps) => {
  const dashSize = (doneItems * 360) / totalItems;
  const gapSize = 360 - dashSize;

  const router = useRouter();

  const onClick = () => {
    router.push(`/${id}`);
  };

  return (
    <Container onClick={onClick}>
      <h3>{title}</h3>
      <Footer>
        <p className="done">
          {doneItems}/{totalItems} feito(s)
        </p>
        <svg viewBox="0 0 100 100">
          <circle
            className="total"
            cx={50}
            cy={50}
            r={40}
            fill="transparent"
            strokeWidth={15}
          />
          <circle
            className="progress"
            cx={50}
            cy={50}
            r={40}
            fill="transparent"
            strokeWidth={15}
            strokeDasharray={`${dashSize} ${gapSize}`}
            pathLength={360}
          />
        </svg>
      </Footer>
    </Container>
  );
};
