import { useState } from 'react';
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
  const [imageSRC, setImageSRC] = useState(
    `https://img.shields.io/tokei/lines/github/${full_name}?style=for-the-badge`,
  );

  const img = new Image();
  img.src = imageSRC;

  img.onload = () => {
    setIsloading(false);
  };

  img.onerror = () => {
    setIsloading(true);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Container href={`https://github.com/${full_name}`}>
      <p> {name.length > 25 ? `${name.substr(0, 25)}...` : name}</p>
      <img alt={`${name} - Total Lines`} src={imageSRC} />
    </Container>
  );
};

export default Repo;
