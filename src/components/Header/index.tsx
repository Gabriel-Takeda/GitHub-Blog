import GitHubBlogLogo from '../../assets/GitHubBlogLogo.svg'
import Perfil from '../../assets/Perfil.jpg'

import { DescriptionContainer, HeaderContainer, ProfileContainer } from './styles'


const Header = () => {
    return (
        <HeaderContainer>
            <header>
                <img src={GitHubBlogLogo} alt='Logotipo do App'/>
            </header>
            <ProfileContainer>
                <img src={Perfil}/>
                <DescriptionContainer>
                    <div id='title'>
                        <h1>Gabriel Takeda</h1>
                        <h3 id='github'>GITHUB</h3>
                    </div>
                    <div id='description'>
                        <h3 id='textDescription'>Estudante de Engenharia de Software na UFAM e estagiário na iTriad, empresa de tecnologia. Aplico meus conhecimentos acadêmicos em projetos práticos e colaboro com uma equipe dedicada para criar soluções inovadoras.</h3>
                        <ul>
                            <li>  github</li>
                            <li>rocketseat</li>
                            <li>3 seguidores</li>
                        </ul>
                    </div>
                </DescriptionContainer>
            </ProfileContainer>
        </HeaderContainer>
    )
}

export { Header }