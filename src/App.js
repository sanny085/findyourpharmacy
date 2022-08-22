import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/configureStore';

import Home from './screen/Home';
import AllPharmacyList from './screen/AllPharmacyList';
import ShopDetails from './screen/ShopDetails';
import Errorscreen from './screen/Errorscreen';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const { store, persistor } = configureStore(createBrowserHistory());
function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/allpharmacylist" element={<AllPharmacyList />} />
                        <Route path="/shop/:shopId" element={<ShopDetails />} />
                        {/* <Route path="shop/:shopID" element={<EachShop />} /> */}

                        {/* <Route index element={<LeagueStandings />} /> */}
                        <Route path="*" element={<Errorscreen />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
