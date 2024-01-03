import Routes from './routes';
import ThemeCustomization from './theme';
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //


function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 1000 * 60 * 5,
      }
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
    <SnackbarProvider
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
        <ThemeCustomization>
          <Routes/>
      </ThemeCustomization>
    </SnackbarProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
