import React, { useContext } from 'react';
import AppContext from '../util/AppContext';

export default function UserDetailsRender() {
  const { user } = useContext(AppContext);
  const dataArr = user.created_at ? user.created_at.split("-") : ['', '', ''];
  return(
    <div className="details-container">
      <img
        src={user.avatar_url}
        alt={`Imagem de ${user.login}`}
        className="details-image"
      />
      <h2>Login: {user.login}</h2>
      <h2>ID: {user.id}</h2>
      <h4>
        Profile_URL:
        <a
          target="_blank"
          href={`https://github.com/${user.login}`}
          rel="noreferrer"
        >
          {` https://github.com/${user.login}`}
        </a>
      </h4>
      <h4>
        Data de Criação:
        {` ${dataArr[2]
          .substr(0,2)}/${dataArr[1]}/${dataArr[0]}`}
      </h4>
    </div>
  )
}