import './App.css';
import Router from './shared/Router';
import { useEffect } from 'react';
import refreshAccessToken from '../src/token/RefreshTokenHandler';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
    // 앱 초기화 또는 라우팅 변경 시 리프레시 토큰을 사용하여 엑세스 토큰 갱신
    useEffect(() => {
        refreshAccessToken();
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Router></Router>
        </QueryClientProvider>
    );
};

export default App;
