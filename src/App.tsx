import CmvChart from "./components/CmvChart/CmvChart";
import LeastSoldProducts from "./components/LeastSoldProducts/LeastSoldProducts";
import TopGroups from "./components/TopGroups/TopGroups";

export default function App() {
    return (
        <div>
            <CmvChart />
            <TopGroups />
            <LeastSoldProducts />
        </div>
    );
}
