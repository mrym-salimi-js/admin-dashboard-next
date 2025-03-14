import { blueGrey } from "@mui/material/colors";
import Link from "next/link";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

export default function Navigation() {
  return (
    <div className="menu">
      <ul>
        <li className="pointer hover-light-purple">
          <GridViewRoundedIcon sx={{ color: blueGrey[700] }} />
          <Link href="/dashboard" className="second-dark-font-color">
            داشبورد
          </Link>
        </li>
      </ul>
    </div>
  );
}
