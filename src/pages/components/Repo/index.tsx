import { useState } from 'react';
import { FiXOctagon } from 'react-icons/fi';
import Loader from './Loader';
import { Container } from './styles';

interface Props {
  data: {
    name: string;
    full_name: string;
  };
}

const Repo: React.FC<Props> = ({ data: { full_name, name } }) => {
  const [isLoading, setIsloading] = useState(true);
  const imageSRC = `https://img.shields.io/tokei/lines/github/${full_name}?style=for-the-badge`;

  const img = new Image();
  img.src = imageSRC;

  img.onload = () => {
    setIsloading(false);
  };

  img.onerror = () => {
    setIsloading(true);
  };

  return (
    <Container>
      <FiXOctagon />
      {isLoading ? (
        <Loader />
      ) : (
        <a href={`https://github.com/${full_name}`}>
          <p> {name.length > 25 ? `${name.substr(0, 25)}...` : name}</p>
          <img alt={`${name} - Total Lines`} src={imageSRC} />
        </a>
      )}
    </Container>
  );
};

export default Repo;
