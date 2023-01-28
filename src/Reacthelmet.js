import React from 'react';
import { Helmet } from 'react-helmet';

const Reacthelmet = () => {
    return (
        <div>
            <Helmet meta={[
    { name: 'Origin Hospital Website', content: "Origin hospital is a nearest hospital in Ukhia, CourtBazar. It is a hospital near cox's bazar." },
    { property: 'og:type', content: 'website' },
  ]}>
            <meta name="Origin Hospital" content="Origin Hospital Court bazar, Ukhia, Cox's Bazar." />
            </Helmet>
        </div>
    );
};

export default Reacthelmet;