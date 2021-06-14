import Navbar from "components/Navbar"
import { Fragment } from "react"
import ActiveResource from "components/ActiveResource"

const Layout = ({children}) =>{
    return (
        <Fragment>
          <Navbar/>
          <ActiveResource/>
          {children}
        </Fragment>
    )
}

export default Layout