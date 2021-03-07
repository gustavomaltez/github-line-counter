import ContentLoader from 'react-content-loader';

const Loader: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={60}
      viewBox="0 0 200 60"
      backgroundColor="#2E2E32"
      foregroundColor="#333335"
      style={{ width: '100%' }}
    >
      <rect x="0" y="0" rx="0" ry="0" width="200" height="25" />
      <rect x="0" y="35" rx="0" ry="0" width="200" height="25" />
    </ContentLoader>
  );
};

export default Loader;
