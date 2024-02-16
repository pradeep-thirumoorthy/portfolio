import { useState } from "react"


const NavbarAnchor = ()=>{
    const [scrollT,setScrollT] = useState(0);
    window.onscroll = ()=>{
        setScrollT(document.documentElement.scrollTop);
        console.log(scrollT);
    }
}
export default NavbarAnchor;