
import ScrollTop from './components/ScrollTop';
import Routes from './routes';
import ThemeCustomization from './theme';
import { SnackbarProvider } from "notistack";



// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //


function App() {

  return (
    <SnackbarProvider
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
        <ThemeCustomization>
         <ScrollTop>
              <Routes/>
         </ScrollTop>
      </ThemeCustomization>
    </SnackbarProvider>
  )
}

export default App
