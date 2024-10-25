import { TonConnectUIProvider } from '@tonconnect/ui-react';
import WalletConnection from './components/WalletConnection';

function App() {
    return (
        <TonConnectUIProvider manifestUrl="https://wallet-3cby.onrender.com/tonconnect-manifest.json">
            <div className="App">
                <h1>TON Wallet Demo</h1>
                <WalletConnection />
            </div>
        </TonConnectUIProvider>
    );
}

export default App;
