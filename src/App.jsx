import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Header from './components/header';
import LeftMenu from './components/leftmenu';
import { isPopupVisible, PopupWidget } from './components/popupWidget';
import './App.css'

function App()
{
  const [placeholderData, setplaceholderData] = useState([]);
  const [popupVisible] = useRecoilState(isPopupVisible);

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
    <div>
      <header className={`component ${popupVisible ? 'inactive' : 'active'}`}>
        <Header />
      </header>
      <main className={`component ${popupVisible ? 'inactive' : 'active'}`}>

        <div className='leftmenu-layout'>
          <LeftMenu />
        </div>

        <div className='main-layout'>
          <MainLayout data={placeholderData} />
        </div>

      </main>
      {popupVisible && <PopupWidget />}
    </div >
  )
}

const MainLayout = React.memo(({ data }) =>
{
  return <React.Fragment>
    {data && data.map((item) => { return (<p key={item.id}>{item.title}</p>); })}
  </React.Fragment>
})

export default App
