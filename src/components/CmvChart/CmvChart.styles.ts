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
    animation: ${fadeUp} 0.6s ease forwards;
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
    background: linear-gradient(180deg, #6366f1 0%, #a855f7 100%);
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

export const Subtitle = styled.p`
    font-family: "DM Sans", sans-serif;
    font-size: 0.8rem;
    color: #64748b;
    margin: 0 0 0 auto;
    letter-spacing: 0.05em;
    text-transform: uppercase;
`;

export const ChartWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px;

    @media (max-width: 768px) {
        height: 220px;
    }
`;

export const LoadingText = styled.p`
    font-family: "DM Sans", sans-serif;
    color: #64748b;
    text-align: center;
    padding: 60px 0;
`;
