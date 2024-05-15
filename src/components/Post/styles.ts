import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    width: 50%;
    height: 16.25rem;
    border-radius: 8px;
    padding: 2rem 2rem 2rem;
    flex-direction: column;

    background-color: ${props => props.theme['Post']};

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme['Title']};
        font-weight: 500;
    }

    h3 {
        font-size: 1rem;
        color: ${props => props.theme['Text']}
    }
`;