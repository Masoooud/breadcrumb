import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Breadcrumb from './components/Breadcrumb';
import Header from './layout/header';
import Main from './layout/main';
import axios from 'axios';

function App() {
  const [route, setRoute] = useState();

  const [routeName, setRouteName] = useState('home');

  const getRoute = async (name) => {
    await axios
      .get(`http://localhost:3000/${name}`)
      .then((res) => {
        const routeData = res.data;
        console.log({ routeData });
        setRoute(routeData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getRoute('home');
  }, []);

  useEffect(() => {
    getRoute(routeName);
  }, [routeName]);

  const setSelectedRoute = (route) => {
    setRouteName(route);
  };

  return (
    <div className="App">
      <Header />
      {route && (
        <div className="main">
          <Breadcrumb setSelectedRoute={setSelectedRoute} route={route} />
          <Main setSelectedRoute={setSelectedRoute} route={route} />
        </div>
      )}
    </div>
  );
}

export default App;
