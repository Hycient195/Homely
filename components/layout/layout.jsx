import Nav from '../nav/Nav';

export default function Layout ({ children }){
    return(
        <>
            <Nav/>
            { children }
        </>
    )
}