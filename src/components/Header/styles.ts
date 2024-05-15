import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    background-color: black;
    width: 100%;
    height: 18rem;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    header { 
        margin-bottom: 2rem;
    }
`

export const ProfileContainer = styled.div`
    display: flex;

    background-color: ${props => props.theme['Post']};
    border-radius: 8px;

    width: 54rem;
    height: 13.25rem;
    margin-bottom: -10rem;
    padding: 0rem 2rem 0rem;

    flex-direction: row;
    align-items: center;

    img {
        width: 148px;
        height: 148px;
        border-radius: 8px; 
        margin-right: 2rem;
    }
`

export const DescriptionContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    height: 9.5rem;


    

    #description {
        display: flex;
        flex-direction: column;
        flex:1;
        margin-top: 0.5rem;
    }


    h3 {
        color: '#3294F8';
    }

    #title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        color: ${props => props.theme['Title']};

        #github {
            color: ${props => props.theme['Brand/Blue']};
        }
    }

    #textDescription {
        font-size: 1rem;
        flex: 1;
        color: ${props => props.theme['Text']};
    }

    ul {
        display: flex;
        list-style: none;

        li {
            margin-right: 2rem;
        }
    }
    
`   