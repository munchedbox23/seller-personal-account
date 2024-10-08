import headerStyles from "./AppHeader.module.css";
import { FC } from "react";
import Logo from "@/shared/assets/images/avito.png";
import { Link } from "react-router-dom";
import { ProfileDropdown } from "@/features/profileDropdown";
import { SearchInput } from "@/features/common/SearchInput";
import { Stack } from "@mui/material";
import { AddAdvertisement } from "@/features/AddAdvertisement";

export const AppHeader: FC = () => {
  return (
    <header id="page-header" className={headerStyles.header}>
      <div className={headerStyles.headerWrapper}>
        <Link to="/">
          <img
            src={Logo}
            alt="Avito logo"
            className={headerStyles.headerLogo}
          />
        </Link>
        <nav className={headerStyles.headerNavigation}>
          <SearchInput />
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <ProfileDropdown />
            <AddAdvertisement />
          </Stack>
        </nav>
      </div>
    </header>
  );
};
