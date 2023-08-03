
import ScrollTop from './components/ScrollTop';
import Routes from './routes';
import ThemeCustomization from './theme';



// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //


function App() {

  return (

      <ThemeCustomization>
       <ScrollTop>
            <Routes/>
       </ScrollTop>
    </ThemeCustomization>
  )
}

export default App
