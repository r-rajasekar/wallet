// src/App.jsx
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import WalletConnection from './components/WalletConnection';
import './App.css';

// You can optionally add options for the provider
const manifestUrl = '/tonconnect-manifest.json';

function App() {
    return (
        <TonConnectUIProvider manifestUrl={manifestUrl}>
            <div className="App">
                <h1>TON Wallet Demo</h1>
                <WalletConnection />
            </div>
        </TonConnectUIProvider>
    );
}

export default App;