import React, { useState } from 'react';

interface MenuItem {
    title: string;
    content: string;
    ID: string;
}

const menuItems: MenuItem[] = [
    { title: 'Daily banking', content: 'Manage your transactions here.', ID: 'transactions' },
    { title: 'Investing', content: 'Explore investment opportunities.', ID: 'investing' },
    { title: 'Loan', content: 'Find loan and leasing options.', ID: 'loan-leasing' },
    { title: 'Insurance', content: 'Get information on insurance plans.', ID: 'insurance' },
    { title: 'Pension', content: 'Plan your pension with us.', ID: 'pension' },
    { title: 'Support', content: 'Need help? Our support team is here for you.', ID: 'support' }
];

function App() {
    const [selectedItem, setSelectedItem] = useState<MenuItem>(menuItems[0]);

    return (
        <>
            <div id="logo" title="Tätte topeltgarantii">&nbsp;</div>
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
            <div className="product">
                <div className="product-content">
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.content}</p>
                </div>
                <div className="product-image-container">
                    <img className="product-image" src={"/img/" + selectedItem.title + ".jpg"} title={selectedItem.title} />
                </div>
            </div>
            <hr/>
            <p>Pipboy OÜ | 2025 | Unlicensed license model</p>
        </>
    );
}

export default App;