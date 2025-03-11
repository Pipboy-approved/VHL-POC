import React, { useState } from 'react';

interface MenuItem {
    title: string;
    content: string;
}

const menuItems: MenuItem[] = [
    { title: 'Transactions', content: 'Manage your transactions here.' },
    { title: 'Investing', content: 'Explore investment opportunities.' },
    { title: 'Loan/leasing', content: 'Find loan and leasing options.' },
    { title: 'Insurance', content: 'Get information on insurance plans.' },
    { title: 'Pension', content: 'Plan your pension with us.' },
    { title: 'Support', content: 'Need help? Our support team is here for you.' }
];

function App() {
    const [selectedItem, setSelectedItem] = useState<MenuItem>(menuItems[0]);

    return (
        <>
            <div className="menu-container">
                {menuItems.map((item) => (
                    <div
                        key={item.title}
                        className="menu-item"
                        onClick={() => setSelectedItem(item)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
            <div className="product">
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.content}</p>
            </div>
        </>
    );
}

export default App; 