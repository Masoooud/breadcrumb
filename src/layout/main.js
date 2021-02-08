import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import folder from '../assets/folder.png';
import file from '../assets/file.png';

function Main({ route, setSelectedRoute }) {
  console.log({ route });
  console.log('children', route.children);

  const editPath = (path) => {
    const editedPath = path.slice(4);
    return editedPath;
  };

  const createTitle = (child) => {
    console.log(editPath(child.path));
    // console.log({ child });
    console.log(`/${child.path}`);
    if (child.type === 'dir') {
      return (
        <Route>
          <Link
            to={editPath(child.path)}
            onClick={() => setSelectedRoute(child.name)}>
            <div className="row">
              <img src={folder} alt="folder" className="icon" />
              <p>{`${child.name}`}</p>
            </div>
          </Link>
        </Route>
      );
    } else {
      console.log('child.type', child.type);
      return (
        <Route>
          <Link
            to={editPath(child.path)}
            onClick={() => setSelectedRoute(child.name)}>
            <div className="row">
              <img src={file} alt="file" className="icon" />
              <p>{`${child.name}`}</p>
            </div>
          </Link>
        </Route>
      );
    }
  };

  return (
    <div className="content">
      <Router>
        <Switch>
          {route.children.length > 0 && (
            <ul>
              {route.children.map((child) => {
                return createTitle(child);
              })}
            </ul>
          )}
          {route.children.length === 0 && (
            <div className="text">
              <p>
                This is a file name:{' '}
                <span style={{ fontWeight: 'bold' }}>{route.label}</span>
              </p>
            </div>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
