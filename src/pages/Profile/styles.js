import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    margin: 32px auto;
    padding: 0 30px;

    h1 {
        margin-top: 80px;
        margin-bottom: 24px;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    img {
        height: 64px;
    }

    span {
        font-size: 20px;
        margin-left: 24px;
    }
    
    a {
        width: 260px;
        height: 60px;
        background: #e02041;
        margin-left: auto;
        border: 0;
        border-radius: 8px;
        color: #fff;
        font-weight: bold;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height:60px;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(90%);
        }
    }

    button {
        height: 60px;
        width: 60px;
        border: 1px solid #dcdce6;
        border-radius: 4px;
        background: transparent;
        margin-left: 16px;
        transition: border-color 0.2s;

        &:hover {
            border-color: #999;
        }
    }
`;

export const IncidentsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
        padding: 24px;
        position: relative;
        background: #FFF;
        border-radius: 8px;

        strong {
            display: block;
            margin-bottom: 16px;
            color: #41414d;
        }

        p + strong {
            margin-top: 32px;
        }

        p {
            color: #737380;
            line-height: 21px;
            font-size: 16px;
        }
    }

    button {
        position: absolute;
        top: 24px;
        right:24px;
        border: 0;
        
        &:hover {
            opacity: 0.8;
        }
    }
`;