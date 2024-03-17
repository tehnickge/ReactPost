import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import styles from "./Header.module.scss";
import HeaderLinks from "./HeaderLinks";


export type HeaderLink = {
    src: string,
    title: string,
}

const links = [
    {src: "/home", title: "HomePage"},
    {src: "/about", title: "AboutPage"},
    {src: "/home32", title: "HomePage2"},
    {src: "/about23", title: "AboutPag2"},
]

const Header = () => {

    return (
        <Grid2 container className={styles.header}>
            <Grid2 xs={7}>
                <HeaderLinks links={links}></HeaderLinks>
            </Grid2>
            <Grid2 xs={5}></Grid2>
        </Grid2>
    )
}

export default Header;