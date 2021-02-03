import React from 'react';

import { Header, BottomContainer, NavBar, LastContainer } from './containers'


const Layout = ({children}) => {
return (
  <>
    <Header>
      <div>
        <p>Logo</p>
      </div>
      <div>
        <p>Profil emplacement</p>
      </div>
    </Header>
    <BottomContainer>
      <NavBar>
        <img alt='calendar' />
      </NavBar>
      <LastContainer>
        {children}
      </LastContainer>
    </BottomContainer>
  </>
)};



export default Layout;