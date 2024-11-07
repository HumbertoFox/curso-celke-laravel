import Link from "next/link";

function Menu () {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/" className="text-blue-500">Home</Link>
                </li>

                <li>
                    <Link href="/about" className="text-blue-500">Sobre</Link>
                </li>
                
                <li>
                    <Link href="/contact" className="text-blue-500">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;