import ContentLoader from 'react-content-loader';
import { Container } from './styles';

const Loader: React.FC = () => {
  return (
    <Container>
      <ContentLoader
        speed={2}
        width={200}
        height={60}
        viewBox="0 0 200 60"
        backgroundColor="#ffffff"
        foregroundColor="#d1cfcf"
        style={{ width: '100%' }}
      >
        <rect x="0" y="0" rx="0" ry="0" width="200" height="25" />
        <rect x="0" y="35" rx="0" ry="0" width="200" height="25" />
      </ContentLoader>
    </Container>
  );
};

export default Loader;
