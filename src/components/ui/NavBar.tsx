"use client";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
export default function NavBar() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="fixed top-0 left-0 w-full bg-background z-10">
            <div className="container mx-auto flex items-center p-4">
                <ul className="flex space-x-6">
                    <NavItem text={"Home"} href="/" pathname={pathname} />
                    <NavItem text={"About"} href="/about" pathname={pathname} />
                    <NavItem
                        text={"Projects"}
                        href="/projects"
                        pathname={pathname}
                    />
                    <NavItem
                        text={"Contact"}
                        href="/contact"
                        pathname={pathname}
                    />
                </ul>
            </div>
        </nav>
    );
}
