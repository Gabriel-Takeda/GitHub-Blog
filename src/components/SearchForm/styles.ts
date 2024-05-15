import styled from "styled-components";

export const SearchFormContainer = styled.div`
    display: flex;
    width: 54rem;
    height: 100%;
    margin-top: 14rem;
    margin-left: 26.5rem;
    justify-content: center;
    flex-direction: column;

    div {
        display: flex;
        justify-content: space-between;
    }

    form {
        display: flex;
        margin-top: 1.5rem;
        width: 100%;
        align-items: center;
        height: 3rem;
        gap: 2rem;

        input {
            height: 100%;
            border-radius: 8px;
            background-color: ${props => props.theme['Input']};
            border-color: gray;
            border-radius: 8px;
            color: white;
            flex: 1;
            width: 85%;
        }

        button {
            width: 10%;
            height: 100%;
            background-color: ${props => props.theme['Input']};
            color: ${props => props.theme['Text']};
            border-radius: 8px;
            border-color: gray;
            cursor: pointer;
        }
    }
`;

export const FeedContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    & > * {
        flex: 1 1 calc(50% - 2rem);
    }
`;