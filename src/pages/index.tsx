import Head from 'next/head';
import { FormEvent, useCallback, useState } from 'react';
import { Container } from '../styles/Home';
import Repo from '../components/Repo';

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

  const handleGetUserRepositories = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!user) {
        alert('Please type a GitHub user!');
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
      } catch (error) {
        alert("Error! This user doesn't exists");
      }
    },
    [user],
  );

  function handleRemoveRepo(id: number) {
    setRepositories(oldState => oldState.filter(repo => repo.id !== id));
  }

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

        {ownerData && (
          <h2>
            {ownerData.login} - {repositories.length}
            {repositories.length === 1 ? ' repository ' : ' repositories '}
            available
          </h2>
        )}

        <section>
          {repositories.length > 0 &&
            repositories.map(repo => (
              <Repo
                data={repo}
                key={String(repo.id)}
                removeRepo={handleRemoveRepo}
              />
            ))}
        </section>
      </Container>
    </>
  );
};

export default Home;
