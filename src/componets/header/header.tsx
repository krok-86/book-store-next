import Link from "next/link";
import HeaderStyled from "./header.styled";

type HeaderProps{
text: string;
href: string;
};



const Header = ({text, href}) => {

    return(
       
        <HeaderStyled>

        <Link {...href}><div>{text}</div>
          </Link>
<div className="title">
Registration block
        </div>
        </HeaderStyled>
        
    )
    }
export default Header;