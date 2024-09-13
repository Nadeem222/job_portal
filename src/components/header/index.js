'use client'

const { Button } = require("../ui/button")
const { Sheet, SheetTrigger, SheetContent } = require("../ui/sheet")
import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { AlignJustify } from "lucide-react"
import Link from "next/link"

function Header({ user }) {
    // console.log(!user);

    const menuItems = [
        {
            label: "Home",
            path: "/",
            show: true,
            id: 1
        },
        {
            label: "Login",
            path: "/login",
            show: !user,
            id: 2
        },
        {
            label: "Register",
            path: "/signup",
            show: !user,
            id: 3

        },
        {
            label: "Jobs",
            path: "/jobs",
            show: user,
            id: 4

        },
        {
            label: "Activity",
            path: "/activity",
            show: user,
            id: 5

        },
        {
            label: "Membership",
            path: "/membership",
            show: user,
            id: 6

        }
    ]
    return (
        <div>

            <header className="flex h-16 w-full shrink-0 items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="lg:hidden">
                            <AlignJustify className="h-6 w-6" />
                            <span className="sr-only">Toggle </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <Link className="mr-6 hidden lg:flex" href={"#"}>
                            <h3>JOBS PORTAL</h3>
                        </Link>
                        <div className="grid gap-2">
                            {
                                menuItems.map((menuItem) => {
                                    // console.log(menuItem.show);

                                    // console.log(menuItem);
                                    return menuItem.show ? (

                                        <Link
                                            key={menuItem.id}
                                            href={menuItem.path}
                                            className="flex w-full items-center py-2 text-lg font-semibold"
                                        >
                                            {menuItem.label}

                                        </Link>
                                    ) : null
                                })
                            }
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <Button>Sign In</Button>
                                </SignInButton>
                            </SignedOut>


                            <SignedIn>
                                <SignOutButton>
                                    <Button>Sign Out</Button>
                                </SignOutButton>
                            </SignedIn>
                        </div>
                    </SheetContent>
                </Sheet>
                <Link className="lg:flex hidden mr-6" href={"/"}>JOB PORTAL</Link>
                <nav className="ml-auto lg:flex hidden gap-6 ">
                    {
                        menuItems.map((menuItem =>
                            menuItem.show ? (
                                <Link
                                    key={menuItem.id}
                                    href={menuItem.path}
                                    className="group inline-flex h-9 w-max item rounded-md"
                                >{menuItem.label}</Link>)
                                : null
                        ))
                    }
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button>Sign In</Button>
                        </SignInButton>
                    </SignedOut>


                    <SignedIn>
                        <SignOutButton>
                            <Button>Sign Out</Button>
                        </SignOutButton>
                    </SignedIn>
                </nav>
            </header>
        </div>
    )
}
export default Header