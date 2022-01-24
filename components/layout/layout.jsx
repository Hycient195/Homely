import Nav from '../nav/Nav';

export default function Layout ({ children }){
    return(
        <>
            <Nav/>
            <div style={{height: "80px"}}></div>
            { children }
        </>
    )
}