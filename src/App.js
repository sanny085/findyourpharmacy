import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import AllPharmacyList from './screen/AllPharmacyList';
import ShopDetails from './screen/ShopDetails';
import Errorscreen from './screen/Errorscreen';

import Navbar from './components/Navbar';
import store from './redux/store';
import { Provider } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
