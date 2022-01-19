import React from 'react';
import PropTypes from 'prop-types';
import '../css/cardRender.css';

export default function CardUser({id, avatar, login}) {
  return (
    <div className="card-user card">
      <img
        alt={`Imagem de ${login}`}
        className="card-img card-img-top"
        src={avatar}
      />
      <h4>
        <span className="login-title">Login: </span>
        {login}
      </h4>
      <h5>
        <span className="login-title">ID: </span>
        {id}
      </h5>
    </div>
  )
}
CardUser.propTypes = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
}
