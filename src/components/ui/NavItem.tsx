import Link from "next/link";

export default function NavItem({
    text,
    href,
    pathname,
}: {
    text: string;
    href: string;
    pathname: string;
}) {
    return (
        <li>
            <Link
                href={href}
                className={`px-2 py-1 rounded hover:bg-accent ${
                    pathname === href ? "bg-primary" : ""
                }`}
            >
                {text}
            </Link>
        </li>
    );
}
