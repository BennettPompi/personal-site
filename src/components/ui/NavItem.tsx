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
        <Link
            href={href}
            className={`px-2 py-1 rounded transition-colors duration-300 font-medium ${
                pathname === href
                    ? "bg-primary hover:bg-primary-light text-white shadow-lg"
                    : "hover:bg-accent hover:shadow-md text-foreground"
            }`}
        >
            {text}
        </Link>
    );
}
