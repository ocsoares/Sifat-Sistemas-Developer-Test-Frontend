import {
    GlobalStyle,
    Grid,
    PageHeader,
    PageSubtitle,
    PageTitle,
    Wrapper,
} from "./App.styles";
import CmvChart from "./components/CmvChart/CmvChart";
import LeastSoldProducts from "./components/LeastSoldProducts/LeastSoldProducts";
import TopGroups from "./components/TopGroups/TopGroups";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <PageHeader>
                    <PageTitle>
                        Dashboard <span>Analytics</span>
                    </PageTitle>
                    <PageSubtitle>
                        Visão consolidada de vendas e custos
                    </PageSubtitle>
                </PageHeader>
                <Grid>
                    <CmvChart />
                    <TopGroups />
                    <LeastSoldProducts />
                </Grid>
            </Wrapper>
        </>
    );
}
