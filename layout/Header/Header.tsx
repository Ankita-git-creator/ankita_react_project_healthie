/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import assest from "@/json/assest";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";

import { useSiteContents } from "@/hooks/react-query/query-hooks/homeQuery.hooks";
import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrapper";
import CallIcon from "@/ui/Icons/CallIcon";
import FlagIcon from "@/ui/Icons/FlagIcon";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

// const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

const drawerWidth = 240;

export default function Header() {
  const navItems = [
    {
      name: "Clinical studies",
      route: "javascript:void(0)"
    },
    {
      name: "The science",
      route: "javascript:void(0)"
    },
    {
      name: "Shop",
      route: "javascript:void(0)"
    },
    {
      name: "Contact us",
      route: "javascript:void(0)"
    }
  ];

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item?.route} key={item.name}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  //for adding class to header while scroll
  const [scroll, setScroll] = React.useState(false);

  const detectScroll = React.useCallback(() => {
    setScroll(window.scrollY > 70);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  const { data: siteContentInfo, isLoading, refetch } = useSiteContents(false);
  console.log("siteContentInfo", siteContentInfo);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <HeaderWrap className={scroll ? "activeHeader main_head" : "main_head"}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="header_topsection"
        flexWrap="wrap"
      >
        <Stack
          direction="row"
          alignItems="center"
          className="header_Tiledetails"
          flexWrap="wrap"
        >
          <Typography className="title_section">
            <i className="flg_icon">
              <FlagIcon />
            </i>
            Official website of Healthie Insurance
          </Typography>
          <Link href="/">30% Discount on Premium Health Insurance</Link>
        </Stack>
      </Stack>
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Container fixed>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" className="headerLogo">
              <Image src={assest.brandLogo} width={55} height={50} alt="Logo" />
            </Link>
            {/* {isLoggedIn ? (
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className="navbar"
              >
                <CustomButtonPrimary
                  onClick={handleLogout}
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  <span>Logout</span>
                </CustomButtonPrimary>

                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  <span>{userData?.email}</span>
                </CustomButtonPrimary>
              </Box>
            ) : (
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className="navbar"
              >
                {navItems.map((item) => (
                  <Link
                    href={item?.route}
                    key={item?.route}
                    className={router.pathname === item.route ? "active" : ""}
                  >
                    
                    {item?.name}
                   
                  </Link>
                ))}
              </Box>
            )} */}
            <Box className="hdr_rgt">
              <Button
                className="fee_quotebtn"
                onClick={() => {
                  router.push("#free-quote");
                }}
              >
                <Typography variant="caption">Get a free quote</Typography>
              </Button>
              <CustomButtonPrimary
                type="button"
                variant="contained"
                color="secondary"
                className="call_btnsection"
                startIcon={<CallIcon />}
                onClick={() => {
                  router.push(`tel:${siteContentInfo?.call_now}`);
                }}
              >
                <Typography variant="caption">call us now</Typography>
              </CustomButtonPrimary>
              <CustomButtonPrimary
                variant="contained"
                color="secondary"
                className="call_btnsection"
                onClick={() => {
                  router.push("/blog");
                }}
              >
                <Typography variant="body1">Blog</Typography>
              </CustomButtonPrimary>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </HeaderWrap>
  );
}
