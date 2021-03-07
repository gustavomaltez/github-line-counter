import { useCallback, useState } from 'react';
import { FiXOctagon } from 'react-icons/fi';
import Loader from './Loader';
import { Container } from './styles';

interface Props {
  data: {
    id: number;
    name: string;
    full_name: string;
  };
  removeRepo: (id: number) => void;
}

const Repo: React.FC<Props> = ({
  data: { id, name, full_name },
  removeRepo,
}) => {
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

  const handleRemoveRepo = useCallback(() => {
    removeRepo(id);
  }, [removeRepo, id]);

  return (
    <Container>
      <FiXOctagon onClick={handleRemoveRepo} className="close-btn" />
      {isLoading ? (
        <Loader />
      ) : (
        <a href={`https://github.com/${full_name}`}>
          <p> {name.length > 22 ? `${name.substr(0, 22)}...` : name}</p>
          <img alt={`${name} - Total Lines`} src={imageSRC} />
        </a>
      )}
    </Container>
  );
};

export default Repo;
