import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import type { ProductData } from "../../types";
import {
    Card,
    Container,
    Grid,
    GroupBadge,
    Header,
    LoadingText,
    ProductInfo,
    ProductName,
    SoldBadge,
    SoldCount,
    SoldLabel,
    Title,
    TitleAccent,
} from "./LeastSoldProducts.styles";

export default function LeastSoldProducts() {
    const [products, setProducts] = useState<ProductData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .finally(() => setLoading(false));
    }, []);

    return (
        <Container>
            <Header>
                <TitleAccent />
                <Title>Produtos Menos Vendidos</Title>
            </Header>
            {loading ? (
                <LoadingText>Carregando...</LoadingText>
            ) : (
                <Grid>
                    {products.map((product) => (
                        <Card key={product.id}>
                            <ProductInfo>
                                <ProductName>{product.name}</ProductName>
                                <GroupBadge>
                                    {product.groupEntity.name}
                                </GroupBadge>
                            </ProductInfo>
                            <SoldBadge>
                                <SoldCount>
                                    {product.totalSold.toLocaleString("pt-BR")}
                                </SoldCount>
                                <SoldLabel>unid.</SoldLabel>
                            </SoldBadge>
                        </Card>
                    ))}
                </Grid>
            )}
        </Container>
    );
}
