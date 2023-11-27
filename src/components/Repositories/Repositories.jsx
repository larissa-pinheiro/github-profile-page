/* import { useEffect, useState } from 'react';

export function Repositories() {
  const [repositoryData, setRepositoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/larissa-pinheiro/repos');
      const data = await response.json();

      const filteredRepos = data.filter(item => {
        return item.id === 599722118 || item.id === 528170768 || item.id === 370869492 || item.id === 519325312;
      });

      setRepositoryData(filteredRepos);
    };

    fetchData();
  }, []);


  return (
    <div className="flex flex-col justify-center items-center">
      {repositoryData.map(item => (
        <div key={item.id}>
          <div className='flex flex-col'>
            {item.name}
            {item.description}
            {item.html_url}
          </div>
        </div>
      ))}
    </div>
  )
} */
