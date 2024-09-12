import Header from "../header/index"

function CommonLayout({ children }) {
    return (
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
            {/* HEADER COMPONENT */}
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default CommonLayout