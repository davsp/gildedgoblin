import Link from 'next/link';

const items = [
    { label: 'Home', link: '/' }, 
    { label: 'Games', link: '/games' }, 
    { label: 'Contact', link: '/contact' }, 
    { label: 'Support', link: '/support' }
];


// {items}
const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => (
                    <li key={index} className="breadcrumb-item">
                        {item.link ? (
                            <Link href={item.link}>
                                {item.label}
                            </Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;