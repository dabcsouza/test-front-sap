/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import AppContext from '../util/AppContext';
import fetchReposAPI from '../services/fetchReposAPI';
import ReactLoading from "react-loading";

export default function UserReposRender() {
  const { user } = useContext(AppContext);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRepos = async () => {
    setIsLoading(true);
    const data = await fetchReposAPI(user.login);
    setIsLoading(false);
    setRepos(data);
  }

  useEffect(() => {
    getRepos();
  }, []);

  return(
    isLoading
    ? (
        <ReactLoading
          type={"spokes"}
          color={"#347edd"}
          height={100}
          width={100}
        />
      )
    : <div className="table-container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            (repos && repos.length > 0)
              && repos.map((repo) => (
                <tr
                  key={repo.id}
                >
                  <td>{repo.id}</td>
                  <td>{repo.name}</td>
                  <td>{repo.html_url}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  )
}