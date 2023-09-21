import { GlobalFonts } from './styles/fonts.tsx';
import { ThemeProvider } from 'styled-components';
import theme from 'react95/dist/themes/peggysPastels';
import { Home } from './pages/Home.tsx';

function App() {
  return (
    <>
      <GlobalFonts />
      <ThemeProvider theme={theme}>
        <div className='container'>
          <Home />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
