import React, { useEffect, useState } from 'react'
import Header from './components/header';
import LeftMenu from './components/leftmenu';
import './App.css'

function App()
{
  const [placeholderData, setplaceholderData] = useState([]);

  useEffect(() =>
  {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) =>
      {
        return res.json();
      }).then((data) =>
      {
        setplaceholderData(data);
      });
  }, []);

  return (
    <>
      <Header />
      <main>

        <div className='leftmenu-layout'>
          <LeftMenu />
        </div>

        <div className='main-layout'>
          <MainLayout data={placeholderData} />
        </div>

      </main>
    </>
  )
}

function MainLayout({ data })
{
  return <React.Fragment>
    {data && data.map((item) => { return (<p id={item.id}>{item.title}</p>); })}
  </React.Fragment>
}

export default App
