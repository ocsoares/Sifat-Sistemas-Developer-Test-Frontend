export interface CmvData {
    id: string;
    month: string;
    cost: number;
}

export interface GroupData {
    id: string;
    name: string;
    totalSold: number;
}

export interface ProductData {
    id: string;
    name: string;
    totalSold: number;
    groupEntity: GroupData;
}
