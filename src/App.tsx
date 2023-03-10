import { GlobalStyle } from "./styles/GlobalStyles";
import Router from "./routes/Router";
import ProductContextProvider from "./contexts/ProductContexts";

function App() {
  return (
    <ProductContextProvider>
      <Router/>
      <GlobalStyle />
    </ProductContextProvider>
  )
}

export default App
