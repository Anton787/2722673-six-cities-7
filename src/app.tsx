import AppRouter from '@router/app-router/app-router';

type AppProps = {
  offersCount: number;
};

function App({offersCount}: AppProps) {
  return <AppRouter offersCount={offersCount} />;
}

export default App;
