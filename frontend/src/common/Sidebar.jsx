import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logo.png";
import Toolbar from "@mui/material/Toolbar";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import ContentPasteGoOutlinedIcon from "@mui/icons-material/ContentPasteGoOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import VideoFileOutlinedIcon from "@mui/icons-material/VideoFileOutlined";
import "./Common.css";

export default function sidebar({ toggleDrawer }) {
  const menu = [
    { text: "마이페이지", icon: <PersonOutlineRoundedIcon /> },
    { text: "인터뷰찾기", icon: <ContentPasteSearchOutlinedIcon /> },
    { text: "공고올리기", icon: <CampaignOutlinedIcon /> },
    { text: "매칭인터뷰", icon: <HandshakeOutlinedIcon /> },
    { text: "신청인터뷰", icon: <ContentPasteGoOutlinedIcon /> },
    { text: "완료인터뷰", icon: <InventoryOutlinedIcon /> },
    { text: "인터뷰진행", icon: <VideocamOutlinedIcon /> },
    { text: "인터뷰모집", icon: <GroupAddOutlinedIcon /> },
    { text: "인터뷰결과", icon: <VideoFileOutlinedIcon /> },
  ];

  return (
    <div>
      <Box
        sx={{ width: "left" === "top" || "left" === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Toolbar variant="dense" className="Header">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt="logo" width="130px" />
        </Toolbar>
        <List>
          {menu.map((item, index) => (
            <div key={index}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
              {index % 3 === 2 && <Divider />}
            </div>
          ))}
          <ListItem className="Footer">
            정보 보도자료 저작권 문의하기 크리에이터 광고개발자 약관
            개인정보처리방침 정책 및 안전YouTube 작동의 원리새로운 기능
            테스트하기 © 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre
            Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료),
            yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보,
            불법촬영물 신고 크리에이터들이 유튜브 상에 게시, 태그 또는 추천한
            상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을
            판매하지 않으며, 그에 대한 책임을 지지 않습니다.
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
