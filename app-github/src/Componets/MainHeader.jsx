import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import AppContext from '../util/AppContext';
import fetchUsersAPI from '../services/fetchUsersAPI';
import '../css/header.css';

export default function MainHeader() {
  const { setUsersRender, actualPage,
          setActualPage, setIsLoading } = useContext(AppContext);

  const handleNextButton = async () => {
    setIsLoading(true);
    const dataNext = await fetchUsersAPI(actualPage * 100);
    setIsLoading(false);
    setUsersRender(dataNext);
    setActualPage((prev) => prev + 1)
  }

  const handlePrevButton = async () => {
    setIsLoading(true);
    const dataPrev = await fetchUsersAPI((actualPage -2) * 100);
    setIsLoading(false);
    setUsersRender(dataPrev);
    setActualPage((prev) => (prev > 1) ? prev - 1 : 1)
  }

  const handleInputChange = ({target : { value }}) => {
    const getPage = async () => {
      setIsLoading(true);
    const dataPage = await fetchUsersAPI((Math.ceil(Number(value)) - 1) * 100);
    setActualPage(Math.ceil(Number(value)));
    setIsLoading(false);
    setUsersRender(dataPage);
    };

    const limitPages = 979741;
    if (!isNaN(Number(value))) {
      Number(value) >= 0 && Number(value) <= limitPages
      && getPage();
    };
  }

  return (
    <header className="header-container">

      <nav className="iconsNav">
        <button
          className="btn"
          disabled={ actualPage < 2 }
          onClick={handlePrevButton}
          type='button'
        >
          <FontAwesomeIcon
            icon={ faArrowAltCircleLeft }
            size="2x"
          />
        </button>
        <div className="actual-page">
          <label htmlFor="page-count">
            <input
              className="form-control"
              id="page-count"
              name="control"
              onChange={ handleInputChange }
              placeholder={ actualPage }
              type="text"
              value={ actualPage }
            />
          </label>
        </div>
        <button
          className="btn"
          onClick={ handleNextButton }
          type='button'
        >
          <FontAwesomeIcon 
            icon={ faArrowAltCircleRight }
            size="2x"
          />
        </button>

      </nav>
    </header>
  );
}