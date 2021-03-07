import Head from 'next/head';
import { FormEvent, useCallback, useState } from 'react';
import { Container } from '../styles/Home';
import Repo from './components/Repo';

interface Owner {
  login: string;
  avatar_url: string;
}
interface Repository {
  id: number;
  name: string;
  description: string;
  full_name: string;
  owner: Owner;
}

const Home: React.FC = () => {
  const [user, setUser] = useState('');
  const [ownerData, setOwnerData] = useState<Owner>();
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const [inputError, setInputError] = useState('');

  const handleGetUserRepositories = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!setUser) {
        setInputError('Insert an user name');
        return;
      }

      try {
        const response = await fetch(
          `https://api.github.com/users/${user}/repos`,
        );
        const repositoriesData = await response.json();

        if (repositoriesData[0]) {
          const { avatar_url, login } = repositoriesData[0].owner;
          setOwnerData({ avatar_url, login });
        }

        setRepositories(repositoriesData);
        setInputError('');
      } catch (error) {
        setInputError('Erro na busca por esse repositório.');
      }
    },
    [user],
  );
  return (
    <>
      <Head>
        <title>Line Counter - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>LineCounter</h1>
        <form onSubmit={handleGetUserRepositories}>
          <input
            placeholder="Type a GitHub user"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
          <button type="submit">SEARCH</button>
        </form>

        <section>
          {repositories.length > 0 &&
            repositories.map(repo => <Repo data={repo} />)}
        </section>
      </Container>
    </>
  );
};

export default Home;
