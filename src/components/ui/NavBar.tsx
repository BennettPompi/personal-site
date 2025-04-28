"use client";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavBar() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="fixed top-0 left-0 w-full bg-background/50 backdrop-blur-md z-10">
            <div className="container mx-auto flex space-x-6 items-center p-4">
                <NavItem text={"Home"} href="/" pathname={pathname} />
                {/*<NavItem text={"About"} href="/about" pathname={pathname} />*/}
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>About</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <Link href="/about/bio" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Bio
                                    </NavigationMenuLink>
                                </Link>
                                <Link
                                    href="/about/experiences"
                                    legacyBehavior
                                    passHref
                                >
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Experiences
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavItem
                    text={"Projects"}
                    href="/projects"
                    pathname={pathname}
                />
                <NavItem text={"Contact"} href="/contact" pathname={pathname} />
            </div>
        </nav>
    );
}
