import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(24px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fillBar = keyframes`
    from { width: 0; }
    to { width: 100%; }
`;

export const Container = styled.div`
    background: linear-gradient(135deg, #0f1117 0%, #1a1d2e 100%);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 20px;
    padding: 32px;
    animation: ${fadeUp} 0.6s ease 0.2s both;
    box-shadow:
        0 0 0 1px rgba(99, 102, 241, 0.05),
        0 20px 60px rgba(0, 0, 0, 0.4);

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 28px;
`;

export const TitleAccent = styled.span`
    display: inline-block;
    width: 4px;
    height: 24px;
    background: linear-gradient(180deg, #a855f7 0%, #6366f1 100%);
    border-radius: 4px;
`;

export const Title = styled.h2`
    font-family: "Syne", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #e2e8f0;
    letter-spacing: -0.02em;
    margin: 0;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Rank = styled.span`
    font-family: "Syne", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    color: #6366f1;
    min-width: 24px;
`;

export const GroupName = styled.span`
    font-family: "DM Sans", sans-serif;
    font-size: 0.95rem;
    color: #e2e8f0;
    flex: 1;
    padding-left: 8px;
`;

export const TotalSold = styled.span`
    font-family: "DM Sans", sans-serif;
    font-size: 0.85rem;
    color: #a5b4fc;
    font-weight: 500;
`;

export const BarTrack = styled.div`
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 4px;
    overflow: hidden;
`;

export const BarFill = styled.div<{ $width: number }>`
    height: 100%;
    width: ${({ $width }) => $width}%;
    background: linear-gradient(90deg, #6366f1 0%, #a855f7 100%);
    border-radius: 4px;
    animation: ${fillBar} 1s ease 0.4s both;
`;

export const LoadingText = styled.p`
    font-family: "DM Sans", sans-serif;
    color: #64748b;
    text-align: center;
    padding: 40px 0;
`;
