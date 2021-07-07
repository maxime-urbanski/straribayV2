import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Header, BottomContainer, NavBar, LastContainer } from './containers'

import './layout.css';

const SecondLayout = ({ children }) => {
  const history = useHistory(true);

  function logout() {
    localStorage.clear();
    history.push('/');
    history.go(0);
  }

  return (
    <>
      <Header>
        <h1 className="title">Straribay</h1>
        <div className="profilContainer">
          <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3917 0.0026016C12.6451 -0.210081 -0.210081 12.6451 0.0026016 28.3917C0.212592 43.4935 12.5091 55.79 27.6109 56C43.3602 56.2154 56.2127 43.3602 55.9973 27.6136C55.79 12.5091 43.4935 0.212592 28.3917 0.0026016ZM45.409 44.0535C45.3553 44.1114 45.2896 44.1569 45.2165 44.1867C45.1433 44.2164 45.0645 44.2297 44.9856 44.2256C44.9068 44.2215 44.8298 44.2001 44.7601 44.1629C44.6904 44.1257 44.6298 44.0736 44.5825 44.0104C43.3785 42.4351 41.904 41.0864 40.2279 40.0273C36.8007 37.8278 32.4582 36.6163 28.0013 36.6163C23.5444 36.6163 19.2019 37.8278 15.7748 40.0273C14.0987 41.086 12.6242 42.4342 11.4202 44.009C11.3729 44.0723 11.3122 44.1243 11.2425 44.1615C11.1729 44.1987 11.0959 44.2201 11.017 44.2243C10.9381 44.2284 10.8593 44.2151 10.7862 44.1853C10.713 44.1556 10.6473 44.1101 10.5937 44.0521C6.64378 39.7882 4.40633 34.2166 4.31009 28.4051C4.09068 15.3063 14.8392 4.3424 27.9434 4.3101C41.0476 4.27779 51.6925 14.9186 51.6925 28.0013C51.697 33.9529 49.4527 39.6865 45.409 44.0535Z" fill="#17303F"/>
            <path d="M28.0014 12.9251C25.3469 12.9251 22.9468 13.9199 21.2413 15.7277C19.5358 17.5355 18.6838 20.0352 18.8762 22.7179C19.2666 28.0013 23.3601 32.3088 28.0014 32.3088C32.6427 32.3088 36.7281 28.0013 37.1266 22.7193C37.3258 20.0621 36.4804 17.5853 34.7467 15.7438C33.0344 13.9266 30.6384 12.9251 28.0014 12.9251Z" fill="#17303F"/>
          </svg>
          <button className="logout" onClick={logout} >Log out</button>
        </div>
      </Header>
      <BottomContainer>
        <NavBar>
          <Link to="/event-list">
            <svg className="navigation">
              <path d="M49 56H7C5.06771 56 3.41797 55.3164 2.05078 53.9492C0.683594 52.582 0 50.9323 0 49V14C0 12.0677 0.683594 10.418 2.05078 9.05078C3.41797 7.68359 5.06771 7 7 7H10.5V3.5C10.5 2.51562 10.8464 1.6862 11.5391 1.01172C12.2318 0.33724 13.0612 0 14.0273 0C14.9935 0 15.8138 0.33724 16.4883 1.01172C17.1628 1.6862 17.5 2.51562 17.5 3.5V7H24.5V3.5C24.5 2.51562 24.8464 1.6862 25.5391 1.01172C26.2318 0.33724 27.0612 0 28.0273 0C28.9935 0 29.8138 0.33724 30.4883 1.01172C31.1628 1.6862 31.5 2.51562 31.5 3.5V7H38.5V3.5C38.5 2.51562 38.8464 1.6862 39.5391 1.01172C40.2318 0.33724 41.0612 0 42.0273 0C42.9935 0 43.8138 0.33724 44.4883 1.01172C45.1628 1.6862 45.5 2.51562 45.5 3.5V7H49C50.9323 7 52.582 7.68359 53.9492 9.05078C55.3164 10.418 56 12.0677 56 14V49C56 50.9323 55.3164 52.582 53.9492 53.9492C52.582 55.3164 50.9323 56 49 56ZM43.75 21H12.25C11.776 21 11.3659 21.1732 11.0195 21.5195C10.6732 21.8659 10.5 22.276 10.5 22.75C10.5 23.224 10.6732 23.6341 11.0195 23.9805C11.3659 24.3268 11.776 24.5 12.25 24.5H43.75C44.224 24.5 44.6341 24.3268 44.9805 23.9805C45.3268 23.6341 45.5 23.224 45.5 22.75C45.5 22.276 45.3268 21.8659 44.9805 21.5195C44.6341 21.1732 44.224 21 43.75 21ZM43.75 31.5H12.25C11.776 31.5 11.3659 31.6732 11.0195 32.0195C10.6732 32.3659 10.5 32.776 10.5 33.25C10.5 33.724 10.6732 34.1341 11.0195 34.4805C11.3659 34.8268 11.776 35 12.25 35H43.75C44.224 35 44.6341 34.8268 44.9805 34.4805C45.3268 34.1341 45.5 33.724 45.5 33.25C45.5 32.776 45.3268 32.3659 44.9805 32.0195C44.6341 31.6732 44.224 31.5 43.75 31.5ZM43.75 42H12.25C11.776 42 11.3659 42.1732 11.0195 42.5195C10.6732 42.8659 10.5 43.276 10.5 43.75C10.5 44.224 10.6732 44.6341 11.0195 44.9805C11.3659 45.3268 11.776 45.5 12.25 45.5H43.75C44.224 45.5 44.6341 45.3268 44.9805 44.9805C45.3268 44.6341 45.5 44.224 45.5 43.75C45.5 43.276 45.3268 42.8659 44.9805 42.5195C44.6341 42.1732 44.224 42 43.75 42Z"/>
            </svg>
          </Link>
          <Link to="/create-event">
            <svg className="navigation" style={{ fill: "#FC8948" }}>
              <path d="M56 28C56 33.5379 54.3578 38.9514 51.2812 43.556C48.2045 48.1605 43.8315 51.7494 38.7151 53.8686C33.5988 55.9879 27.9689 56.5424 22.5375 55.462C17.106 54.3816 12.1169 51.7149 8.20102 47.799C4.28515 43.8831 1.61841 38.894 0.538025 33.4625C-0.542361 28.0311 0.0121319 22.4012 2.13139 17.2849C4.25064 12.1685 7.83947 7.79553 12.444 4.71885C17.0486 1.64217 22.4621 0 28 0C35.4261 0 42.548 2.94999 47.799 8.20101C53.05 13.452 56 20.5739 56 28ZM41.2825 25.375H30.625V14.7175C30.625 14.0213 30.3484 13.3536 29.8562 12.8613C29.3639 12.3691 28.6962 12.0925 28 12.0925C27.3038 12.0925 26.6361 12.3691 26.1439 12.8613C25.6516 13.3536 25.375 14.0213 25.375 14.7175V25.375H14.7175C14.0213 25.375 13.3536 25.6516 12.8614 26.1438C12.3691 26.6361 12.0925 27.3038 12.0925 28C12.0925 28.6962 12.3691 29.3639 12.8614 29.8561C13.3536 30.3484 14.0213 30.625 14.7175 30.625H25.375V41.2825C25.375 41.9787 25.6516 42.6464 26.1439 43.1386C26.6361 43.6309 27.3038 43.9075 28 43.9075C28.6962 43.9075 29.3639 43.6309 29.8562 43.1386C30.3484 42.6464 30.625 41.9787 30.625 41.2825V30.625H41.2825C41.9787 30.625 42.6464 30.3484 43.1387 29.8561C43.6309 29.3639 43.9075 28.6962 43.9075 28C43.9075 27.3038 43.6309 26.6361 43.1387 26.1438C42.6464 25.6516 41.9787 25.375 41.2825 25.375V25.375Z"/>
            </svg>
          </Link>
          <Link to="/" onClick={logout}>
            <svg className="navigation">
            <path d="M 32.667969 28 L 23.332031 28 L 23.332031 0 L 32.667969 0 Z M 42.496094 4.09375 L 39.667969 7.824219 C 46.628906 11.863281 51.332031 19.386719 51.332031 28 C 51.332031 40.867188 40.867188 51.332031 28 51.332031 C 15.132812 51.332031 4.667969 40.867188 4.667969 28 C 4.667969 19.386719 9.371094 11.863281 16.332031 7.824219 L 13.503906 4.09375 C 5.417969 9 0 17.851562 0 28 C 0 43.464844 12.535156 56 28 56 C 43.464844 56 56 43.464844 56 28 C 56 17.851562 50.582031 9 42.496094 4.09375 Z M 42.496094 4.09375 "/>
            </svg>
          </Link>
        </NavBar>
        <LastContainer>
          {children}
        </LastContainer>
      </BottomContainer>
    </>
  )
};



export default SecondLayout;