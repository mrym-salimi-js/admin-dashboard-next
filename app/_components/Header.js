"use client";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { blue, purple } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import adminProf from "@/public/img/me.png";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

export default function Header() {
  return (
    <header>
      <div className="header-r">
        <div className="logo">
          <Link href="/dashboard">
            <Image src="/icon.png" width={40} height={40} alt="logo" />
          </Link>
          {/* <h4>شیپورچی</h4> */}
        </div>
        <div className="nav-closer pointer hover-dark-purple">
          <MenuRoundedIcon
            fontSize="small"
            sx={{ color: purple[900] }}
            className="hover-wight"
          />
        </div>
      </div>
      <div className="header-l">
        <div className="adminInfoBtn pointer hover-dark-blue">
          <Image
            className="border-full"
            src={adminProf}
            width={35}
            height={35}
            alt={"admin profile"}
          />
          <SettingsRoundedIcon
            sx={{ color: blue[500] }}
            className="hover-wight"
          />
        </div>
      </div>
    </header>
  );
}
