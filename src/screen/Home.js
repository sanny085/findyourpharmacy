import React, { useState, useEffect } from 'react';
import OpenShopBrand from '../images/open.png';
import { FiSearch } from 'react-icons/fi';
import { ImLocation } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLocations } from '../api/api';

const Home = () => {
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.getLocation);
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
    console.log('Home location : ', location);
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
                                    <div
                                        className="card shadow-sm rounded-3 position-absolute mh-100"
                                        style={{ width: '100%', marginTop: '80px', zIndex: '1px' }}
                                    >
                                        <table class="table table-light table-hover overflow-hidden">
                                            <tbody>
                                                {selector.predictions.map((location) => (
                                                    <tr className="p-3">
                                                        <td className="border border-0">
                                                            <span className="px-1" style={{ fontSize: '20px' }}>
                                                                <ImLocation />
                                                            </span>
                                                            <span style={{ fontSize: '15px' }}>
                                                                {location.description}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    location && (
                                        <div
                                            className="card shadow-sm rounded-3 position-absolute mh-100"
                                            style={{ width: '100%', marginTop: '80px', zIndex: '1px' }}
                                        >
                                            <table class="table table-light table-hover overflow-hidden">
                                                <tbody>
                                                    {location && (
                                                        <tr className="p-4">
                                                            <td className="border border-0 ">No Result Founds</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    )
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
