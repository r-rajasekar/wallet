// src/components/WalletConnection.jsx
import React, { useState } from 'react';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';

const WalletConnection = () => {
    const userAddress = useTonAddress();
    const [txStatus, setTxStatus] = useState('');

    const handleTransaction = async () => {
        if (!userAddress) {
            alert('Please connect wallet first');
            return;
        }

        try {
            setTxStatus('Sending transaction...');
            
            // Example transaction (sending 0.01 TON)
            const transaction = {
                validUntil: Math.floor(Date.now() / 1000) + 60, // 60 seconds from now
                messages: [
                    {
                        address: 'EQBIhPuWmjT7fP-VomuTWseE8JNWv2q7QYfsVQ1IZwnMk8wL', // Example address
                        amount: '10000000', // 0.01 TON in nano TON
                    }
                ]
            };

            // We'll implement the actual transaction sending once connected
            console.log('Transaction prepared:', transaction);
            setTxStatus('Ready to send transaction');
        } catch (error) {
            console.error('Transaction failed:', error);
            setTxStatus('Transaction failed: ' + error.message);
        }
    };

    return (
        <div className="wallet-container">
            <div className="connect-button">
                <TonConnectButton />
            </div>
            
            {userAddress && (
                <div className="wallet-info">
                    <p>Connected Wallet: {userAddress}</p>
                    
                    <button 
                        onClick={handleTransaction}
                        className="transaction-button"
                    >
                        Send Test Transaction (0.01 TON)
                    </button>
                    
                    {txStatus && <p className="status-message">{txStatus}</p>}
                </div>
            )}
        </div>
    );
};

export default WalletConnection;