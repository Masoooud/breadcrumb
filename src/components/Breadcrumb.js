import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Breadcrumb({ route, setSelectedRoute }) {
  // console.log({ route });
  const routeNames = route.path.split('/');
  console.log(routeNames);

  const createPath = (index) => {
    if (index === 0) {
      return '/';
    } else if (index === routeNames.length - 1) {
      return route.path.slice(4);
    }

    let path = '';
    for (let i = 1; i < index + 1; i++) {
      path = path + '/' + routeNames[i];
    }
    return path;
  };

  return (
    <Router>
      <div className="breadcrumb-container">
        <ul>
          {routeNames.map((name, index) => {
            return (
              <Fragment>
                <Link
                  to={`${createPath(index)}`}
                  replace
                  onClick={() => setSelectedRoute(name)}>
                  {name.toUpperCase()}
                </Link>
                {index !== routeNames.length - 1 && <span> {'>'} </span>}
              </Fragment>
            );
          })}
        </ul>
      </div>
    </Router>
  );
}

export default Breadcrumb;
