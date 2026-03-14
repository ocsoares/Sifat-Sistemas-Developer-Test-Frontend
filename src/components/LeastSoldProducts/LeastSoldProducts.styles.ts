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

export const Container = styled.div`
    background: linear-gradient(135deg, #0f1117 0%, #1a1d2e 100%);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 20px;
    padding: 32px;
    animation: ${fadeUp} 0.6s ease 0.4s both;
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
    background: linear-gradient(180deg, #6366f1 0%, #818cf8 100%);
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

export const Grid = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Card = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 14px 18px;
    transition:
        border-color 0.2s ease,
        background 0.2s ease;

    &:hover {
        background: rgba(99, 102, 241, 0.06);
        border-color: rgba(99, 102, 241, 0.25);
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const ProductName = styled.span`
    font-family: "DM Sans", sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: #e2e8f0;
`;

export const GroupBadge = styled.span`
    font-family: "DM Sans", sans-serif;
    font-size: 0.75rem;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 4px;

    &::before {
        content: "";
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #6366f1;
    }
`;

export const SoldBadge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
`;

export const SoldCount = styled.span`
    font-family: "Syne", sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #a5b4fc;
`;

export const SoldLabel = styled.span`
    font-family: "DM Sans", sans-serif;
    font-size: 0.7rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;

export const LoadingText = styled.p`
    font-family: "DM Sans", sans-serif;
    color: #64748b;
    text-align: center;
    padding: 40px 0;
`;
