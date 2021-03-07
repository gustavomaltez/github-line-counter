import { Container } from './styles';

interface Props {
  data: {
    name: string;
    full_name: string;
  };
}

const Repo: React.FC<Props> = ({ data: { full_name, name } }) => {
  return (
    <Container href={`https://github.com/${full_name}`}>
      <p>{name}</p>
      <img
        alt="Total Lines"
        src={`https://img.shields.io/tokei/lines/github/${full_name}?style=for-the-badge`}
      />
    </Container>
  );
};

export default Repo;
