'use client'

const { Button } = require("../ui/button")
const { Sheet, SheetTrigger, SheetContent } = require("../ui/sheet")
import { AlignJustify } from "lucide-react"
import Link from "next/link"

function Header() {

    const menuItems = [
        {
            label: "Home",
            path: "/",
            show: true
        },
        {
            label: "Login",
            path: "/login",
            show: true
        },
        {
            label: "Register",
            path: "/signup",
            show: true
        }
    ]
    return (
        <div>

            <header className="flex h-16 w-full shrink-0 items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button>
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
                                    console.log(menuItem.show);

                                    console.log(menuItem);
                                    return menuItem.show ? (

                                        <Link
                                            href={menuItem.path}
                                            className="flex w-full items-center py-2 text-lg font-semibold"
                                        >
                                            {menuItem.label}

                                        </Link>
                                    ) : null
                                })
                            }
                        </div>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    )
}
export default Header