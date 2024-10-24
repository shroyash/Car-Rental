import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../Router/Router'


const Layout = () => {
  return (
    <div>
      <Fragment>
        <Header/>
        <div>
            <Routers/>
        </div>
        <Footer/>
      </Fragment>
    </div>
  )
}

export default Layout
