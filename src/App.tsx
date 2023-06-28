import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ScrollTop from './components/ScrollTop';
import Routes from './routes';
import ThemeCustomization from './theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //


function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeCustomization>
       <ScrollTop>
            <Routes/>
       </ScrollTop>
    </ThemeCustomization>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
