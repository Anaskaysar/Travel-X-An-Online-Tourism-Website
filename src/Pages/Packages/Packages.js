import React from 'react';
import usePackages from '../../hooks/usePackages';
import Package from './Package';
import './package.css'
const Packages = () => {
    const [packages]=usePackages();
    return (
        <div className="container mt-20">
            <div className="packages-banner" >
                <h4>Our Tour Packages</h4>
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-12">
                {
                 packages?.map(singlepackage=> <Package  singlepackage={singlepackage} key={singlepackage._id}/> )
                }
            </div>

        </div>
    )
};

export default Packages;