import React, { useState, useEffect } from 'react';
import OpenShopBrand from '../images/open.png';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLocations } from '../api/api';

const Home = () => {
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    useEffect(() => {
        //debouncing the action
        let interval = setTimeout(() => {
            dispatch(fetchLocations(location));
        }, 500);

        return () => {
            clearTimeout(interval);
        };
    }, [location]);

    const handleChange = (e) => {
        setLocation(e.target.value);
    };

    return (
        <div className="container-sm container-md mx-auto">
            <div className="d-flex align-items-center justify-content-center" style={{ height: '75vh' }}>
                <div className="row searchWidth">
                    <div className="col align-self-center">
                        <img
                            src={OpenShopBrand}
                            className="img-fluid mx-auto d-block"
                            alt="OpenShopBrand"
                            style={{ width: '165px', height: '160px' }}
                        />
                        <form onChange={handleChange}>
                            <div class="d-flex position-relative my-3">
                                <input
                                    type="text"
                                    className="rounded-pill form-control shadow-sm px-3"
                                    id="search"
                                    style={{ width: '100%', height: '72px' }}
                                    value={location}
                                />
                                <div className="position-absolute p-4 top-50 end-0 translate-middle-y">
                                    <h3>
                                        <FiSearch />
                                    </h3>
                                </div>

                                {selector.predictions.length > 0 ? (
                                    <table
                                        class="table position-absolute table-light table-hover overflow-hidden"
                                        style={{ marginTop: '75px', zIndex: '1px' }}
                                    >
                                        <tbody>
                                            {selector.predictions.map((location) => (
                                                <tr>
                                                    <td>{location.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <table
                                        class="table position-absolute table-light table-hover overflow-hidden"
                                        style={{ marginTop: '75px', zIndex: '1px' }}
                                    >
                                        <tbody>
                                            {location && (
                                                <tr>
                                                    <td>No Result Founds</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
