import React, { useState } from 'react';
import OpenShopBrand from '../images/open.png';
import { FiSearch } from 'react-icons/fi';

const Home = () => {
    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    console.log('Home', search);
    return (
        <div className="container-sm container-md mx-auto">
            <div className="d-flex align-items-center justify-content-center" style={{ height: '75vh' }}>
                <div className="row" style={{ width: '100%' }}>
                    <div className="col align-self-center">
                        <img
                            src={OpenShopBrand}
                            className="img-fluid mx-auto d-block"
                            alt="OpenShopBrand"
                            style={{ width: '180px', height: '160px' }}
                        />
                        <form onChange={handleChange}>
                            <div class="d-flex position-relative my-3">
                                <input
                                    type="text"
                                    className="rounded-pill form-control shadow-sm"
                                    id="search"
                                    style={{ width: '100%', height: '70px' }}
                                    value={search}
                                />
                                <div className="position-absolute p-4 top-50 end-0 translate-middle-y">
                                    <h3>
                                        <FiSearch />
                                    </h3>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
