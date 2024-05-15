import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Home } from "./pages/Home"
import { PostProvider } from "./context/PostContext"

const App = () =>  {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <PostProvider>
          <Home/>
        </PostProvider>
    </ThemeProvider>
  )
}

export default App
