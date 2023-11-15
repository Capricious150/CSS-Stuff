import Link from "next/link"

export default function Navbar () {

    return (
        <nav className = "navBar">
            <section className="wp20 p1" style={{marginLeft: '1.5rem'}}>
                <h3 className="yellow">CSS Stuff</h3>
            </section>
            <section className="wp60 flexRow">
                <Link className="white" href='/' style = {{textDecoration: "none"}}>Home</Link>
                    &ensp;
                <Link className="white" href='/tbd' style = {{textDecoration: "none"}}>Tbd</Link>
                    &ensp;
                <Link className="white" href='/tbd' style = {{textDecoration: "none"}}>Tbd</Link>
                    &ensp;
                <Link className="white" href='/tbd' style = {{textDecoration: "none"}}>Tbd</Link>
            </section>
            <section className="wp20">

            </section>
        </nav>
    )
}