import Link from "next/link"

export default function Navbar () {

    return (
        <nav className = "navBar">
            <section className="wp20 p1" style={{marginLeft: '1.5rem'}}>
                <h3 className="yellow">CSS Stuff</h3>
            </section>
            <section className="wp70 flexRow">
                <Link className="white hoverDarken" href='/' style = {{textDecoration: "none"}}>Home</Link>
                    &ensp;
                <Link className="white hoverDarken" href='/devblog' style = {{textDecoration: "none"}}>Blog</Link>
                    &ensp;
                <Link className="white hoverDarken" href='/content' style = {{textDecoration: "none"}}>Content</Link>
                    &ensp;
                <Link className="white hoverDarken" href='/tbd' style = {{textDecoration: "none"}}>Tbd</Link>
            </section>
            <section className="wp10 flexRow p1" style={{justifyContent: 'right'}}>
                {/* Possible future Nav Element, for now just a vanity circle */}
                <div id="accountCircle" style={{display: "flex", justifyContent: "center", alignItems: "center"}}> 
                    <h4 className="white">A</h4>
                </div>
            </section>
        </nav>
    )
}