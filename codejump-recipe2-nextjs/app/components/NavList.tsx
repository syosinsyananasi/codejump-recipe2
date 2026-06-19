type NavLink = {
    text: string;
};

const navListItems: NavLink[] = [
    { text: "Instagram" },
    { text: "Twitter" },
    { text: "Facebook" },
];

export default function NavList() {
    return (
        <nav>
            <ul className="flex justify-center space-x-4 mb-8">
                {navListItems.map((item, index) => (
                    <li key={index}>
                        <a>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}