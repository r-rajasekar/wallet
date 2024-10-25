import React from 'react';
import { TonConnectButton, useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';

const WalletConnection = () => {
    const userAddress = useTonAddress();
    const [tonConnectUI] = useTonConnectUI();

    const handleTransaction = async () => {
        if (!userAddress) {
            alert('Please connect wallet first');
            return;
        }

        try {
            const transaction = {
                validUntil: Math.floor(Date.now() / 1000) + 60,
                messages: [
                    {
                        address: 'EQBIhPuWmjT7fP-VomuTWseE8JNWv2q7QYfsVQ1IZwnMk8wL',
                        amount: '10000000', // 0.01 TON
                    }
                ]
            };

            const result = await tonConnectUI.sendTransaction(transaction);
            console.log('Transaction sent:', result);
            alert('Transaction sent successfully!');
        } catch (error) {
            console.error('Transaction failed:', error);
            alert('Transaction failed: ' + error.message);
        }
    };

    return (
        <div className="wallet-container">
            <TonConnectButton />
            
            {userAddress && (
                <div className="wallet-info">
                    <p>Connected Address: {userAddress}</p>
                    <button 
                        onClick={handleTransaction}
                        className="transaction-button"
                    >
                        Send Test Transaction (0.01 TON)
                    </button>
                </div>
            )}
        </div>
    );
};

export default WalletConnection;
