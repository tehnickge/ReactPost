import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import styles from "./Header.module.scss";
import HeaderLinks from "./HeaderLinks";
import Logo from "./../../../public/next.svg";


export type HeaderLink = {
    src: string,
    title: string,
}

const links = [
    {src: "/", title: "Home"},
    {src: "/posts", title: "Posts"},
]

const Header = () => {

    return (
        <Grid2 container className={styles.header}>
            <Grid2 xs={7}>
                <HeaderLinks links={links}></HeaderLinks>
            </Grid2>
            <Grid2 xs={5} className={styles.header__logo}>
                <img {...Logo}/>
            </Grid2>
        </Grid2>
    )
}

export default Header;