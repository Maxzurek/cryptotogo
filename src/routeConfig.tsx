import CoinIndex from "./components/coinIndex/CoinIndex";
import LandingPage from "./components/landingPage/LandingPage";

const routes = [
    {path: '/coin', component: <CoinIndex />},
    {path: '/', component: <LandingPage />},
]

export default routes;