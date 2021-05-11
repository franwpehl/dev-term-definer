import styles from './Layout.module.scss';
import Head from 'next/head';
import React from 'react';
import Nav from 'Nav/Nav';
import Footer from 'Footer/Footer';





const Layout: React.FC  = ({children}) => {

return <>
<Head>
<title>Modern Dev Terms Definer</title>
</Head>
<div className={styles.layout}>
<Nav />
<main>{children}</main>
</div>
<Footer />
</>
};

export default Layout;
