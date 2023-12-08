import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function Copyright() {
  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ color: "white", pt: 2 }}
      >
        {"Developed by: "}
        <Link
          color="inherit"
          href="https://Starside.media/"
        >
          Starside.media
        </Link>
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ color: "white", pt: 2 }}
      >
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://IV.Direct/"
        >
          IV.Direct
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}
