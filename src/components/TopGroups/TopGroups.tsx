import { useEffect, useState } from "react";
import { getGroups } from "../../services/api";
import type { GroupData } from "../../types";
import {
    BarFill,
    BarTrack,
    Container,
    GroupName,
    Header,
    ItemHeader,
    List,
    ListItem,
    LoadingText,
    Rank,
    Title,
    TitleAccent,
    TotalSold,
} from "./TopGroups.styles";

export default function TopGroups() {
    const [groups, setGroups] = useState<GroupData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGroups()
            .then(setGroups)
            .finally(() => setLoading(false));
    }, []);

    const maxSold = groups[0]?.totalSold ?? 1;

    return (
        <Container>
            <Header>
                <TitleAccent />
                <Title>Grupos Mais Vendidos</Title>
            </Header>
            {loading ? (
                <LoadingText>Carregando...</LoadingText>
            ) : (
                <List>
                    {groups.map((group, index) => (
                        <ListItem key={group.id}>
                            <ItemHeader>
                                <Rank>#{index + 1}</Rank>
                                <GroupName>{group.name}</GroupName>
                                <TotalSold>
                                    {group.totalSold.toLocaleString("pt-BR")}{" "}
                                    unid.
                                </TotalSold>
                            </ItemHeader>
                            <BarTrack>
                                <BarFill
                                    $width={(group.totalSold / maxSold) * 100}
                                />
                            </BarTrack>
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
    );
}
