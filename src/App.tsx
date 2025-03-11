import { useState } from 'react';

interface MenuItem {
    title: string;
    content: string;
}

const menuItems: MenuItem[] = [
    { title: 'Home', content: 'Welcome to our website! Here you can find all the information you need.' },
    { title: 'Products', content: 'Browse our wide range of products and services.' },
    { title: 'Services', content: 'We offer various professional services to meet your needs.' },
    { title: 'About', content: 'Learn more about our company and our mission.' },
    { title: 'Contact', content: 'Get in touch with us for any inquiries.' },
    { title: 'Blog', content: 'Read our latest articles and updates.' },
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
            <div id="product">
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.content}</p>
            </div>
        </>
    );
}

export default App; 