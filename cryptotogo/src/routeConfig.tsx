import CoinIndex from "./components/navigation/CoinIndex";
import LandingPage from "./components/navigation/LandingPage";

const routes = [
    {path: '/coin', component: <CoinIndex />},
    {path: '/', component: <LandingPage />},
]

export default routes;