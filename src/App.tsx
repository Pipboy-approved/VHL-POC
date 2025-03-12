import React, { useState } from 'react';

interface MenuItem {
    title: string;
    content: string;
    ID: string;
}

const menuItems: MenuItem[] = [
    { title: 'Transactions', content: 'Manage your transactions here.', ID: 'transactions' },
    { title: 'Investing', content: 'Explore investment opportunities.', ID: 'investing' },
    { title: 'Loan/leasing', content: 'Find loan and leasing options.', ID: 'loan-leasing' },
    { title: 'Insurance', content: 'Get information on insurance plans.', ID: 'insurance' },
    { title: 'Pension', content: 'Plan your pension with us.', ID: 'pension' },
    { title: 'Support', content: 'Need help? Our support team is here for you.', ID: 'support' }
];

function App() {
    const [selectedItem, setSelectedItem] = useState<MenuItem>(menuItems[0]);

    return (
        <>
            <div id="logo">&nbsp;</div>
            <div className="menu-container">
                {menuItems.map((item) => (
                    <div
                        key={item.title}
                        className="menu-item"
                        id={item.ID}
                        onClick={() => setSelectedItem(item)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
            <div className="product-container">
                <div id="product">

                </div>
            </div>
            <div className="product">
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.content}</p>
            </div>
        </>
    );
}

export default App; 