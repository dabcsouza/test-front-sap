/* eslint-disable react-hooks/exhaustive-deps */
// Imports
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../util/AppContext';
import CardUser from '../Componets/CardUser';
import fetchAPI from '../services/fetchUsersAPI';
import MainHeader from '../Componets/MainHeader';
import ReactLoading from "react-loading";
import '../css/home.css';

// Code
export default function Home() {
  const { usersRender, setUsersRender,
    isLoading, setIsLoading } = useContext(AppContext);
  
  const getData = async () => {
    setIsLoading(true);
    setUsersRender( await fetchAPI(0));
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])
  return(
    <main
      className="main-container"
    >
      <MainHeader />
      {
        isLoading
        ? (
            <ReactLoading
              type={"spokes"}
              color={"#347edd"}
              height={100}
              width={100}
            />
          )
        : (
          <section className="users-section">
            {
              usersRender.length > 0
              && usersRender.map((user) => (
                <Link
                  key={user.id}
                  to={`/${user.login}`}
                >
                  <CardUser
                    avatar={user.avatar_url}
                    id={user.id}
                    login={user.login}
                  />
                </Link>
              ))
            }
          </section>)
      }
    </main>
  )
}