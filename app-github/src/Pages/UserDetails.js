/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import AppContext from '../util/AppContext';
import fetchUserDetails from '../services/fetchUserDetails';
import PropTypes from 'prop-types';
import ReactLoading from "react-loading";
import UserDetailsRender from '../Componets/UserDetailsRender';
import UserReposRender from '../Componets/UserReposRender';
import '../css/userDetails.css';

export default function UserDetails({ history: {push}, match: { params : { userLogin } } }) {
  const { user, setUser, isLoading, setIsLoading } = useContext(AppContext);
  const [screenRender, setScreenRender] = useState('details')

  const getUserDetails = async () => {
    setIsLoading(true);
    setUser(await fetchUserDetails(userLogin))
    setIsLoading(false);
  }

  const renderContent = () => (
    screenRender === 'details'
      ? <UserDetailsRender />
      : <UserReposRender />
  )

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <main className="main-details">
      <nav className="nav-to-home">
        <button
          className="btn btn-outline-danger"
          onClick={() => push('/')}
          type="button"
        >
          <FontAwesomeIcon
            icon={ faHome }
            size="2x"
          />
        </button>
      </nav>
      <header className="header-details">
        <button
          className={`details-render ${
          screenRender === 'details' ? 'header-active' : ''}`}
          onClick={() => setScreenRender('details')}
          type="button"
        >
          <h2>Detalhes</h2>
        </button>
        <button
          className={`repos-render ${
          screenRender !== 'details' ? 'header-active' : ''}`}
          onClick={() => setScreenRender('repos')}
          type="button"
        >
          <h2>Repositórios</h2>
        </button>
      </header>
      {
        user.message
          ? <h2> Usuário não encontrado </h2>
          : (
              isLoading
              ? (
                  <ReactLoading
                    type={"spokes"}
                    color={"#347edd"}
                    height={100}
                    width={100}
                  />
                )
              : renderContent()
            )
      }
    </main>
  )
}

UserDetails.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      userLogin: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}