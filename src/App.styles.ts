import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #080a12;
        background-image:
            radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
    }
`;

const fadeDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-12px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 48px 24px;

    @media (max-width: 768px) {
        padding: 24px 16px;
    }
`;

export const PageHeader = styled.header`
    margin-bottom: 48px;
    animation: ${fadeDown} 0.5s ease both;
`;

export const PageTitle = styled.h1`
    font-family: "Syne", sans-serif;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 800;
    color: #f1f5f9;
    letter-spacing: -0.03em;
    line-height: 1.1;

    span {
        background: linear-gradient(90deg, #6366f1 0%, #a855f7 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

export const PageSubtitle = styled.p`
    font-family: "DM Sans", sans-serif;
    font-size: 0.95rem;
    color: #475569;
    margin-top: 8px;
`;

export const Grid = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 24px;

    & > :first-child {
        grid-column: 1 / -1;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
