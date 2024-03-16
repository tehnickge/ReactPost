import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import styles from "./Header.module.scss";

const Header = () => {
    

    return (
        <Grid2 container className={styles.header}>
            <Grid2 xs={12}>Jopa</Grid2>
        </Grid2>
    )
}

export default Header;