import { TonConnectUIProvider } from '@tonconnect/ui-react';
import WalletConnection from './components/WalletConnection';

function App() {
    return (
        <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
            <div className="App">
                {/* Your other components */}
                <WalletConnection />
            </div>
        </TonConnectUIProvider>
    );
}

export default App;
