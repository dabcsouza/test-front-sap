import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function Provider({children}) {
  const [ usersRender, setUsersRender ] = useState([]);
  const [ actualPage, setActualPage ] = useState(1);
  const [ user, setUser ] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  return(
    <AppContext.Provider
      value={ {
        actualPage,
        isLoading,
        user,
        usersRender,
        setActualPage,
        setIsLoading,
        setUser,
        setUsersRender,
      } }
    >
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
