import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Navbar from './components/Navbar';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlight />
      </main>
    </QueryClientProvider>
  );
}

export default App;
