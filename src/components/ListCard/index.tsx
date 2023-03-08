import { Container, Footer } from './styles';

export type ListCardProps = {
  title: string;
  totalItems: number;
  doneItems: number;
};

export const ListCard = ({ title, totalItems, doneItems }: ListCardProps) => {
  const dashSize = (doneItems * 360) / totalItems;
  const gapSize = 360 - dashSize;

  return (
    <Container>
      <h3>{title}</h3>
      <Footer>
        <p className="done">
          {doneItems}/{totalItems} feito(s)
        </p>
        <svg viewBox="0 0 100 100" width={30} height={30}>
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
