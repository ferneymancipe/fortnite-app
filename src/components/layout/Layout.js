import React from 'react';

import Sidebar from './Sidebar';
import Footer from './Footer';
import ScrollButton from '../tools/ScrollButton';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Sidebar />
            {props.children}
            <ScrollButton />
            <Footer />
        </React.Fragment>
    );
}
 
export default Layout;