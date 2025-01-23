import BusinessIcon from "@mui/icons-material/Business";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import SettingsIcon from "@mui/icons-material/Settings";
import CampaignIcon from "@mui/icons-material/Campaign";
import { Home } from "@mui/icons-material";

//サイドバー項目
export const menuItems = [
  { text: "ホーム", icon: <Home />, path: "/Companytoppage" },
  { text: "お知らせを発行", icon: <CampaignIcon />, path: "/Setcompanynotice" },
  { text: "求人設定", icon: <EventNoteIcon />, path: "" },
  { text: "マッチング", icon: <ContentPasteSearchIcon />, path: "" },
  { text: "企業プロフィール", icon: <BusinessIcon />, path: "" },
  { text: "設定", icon: <SettingsIcon />, path: "" },
];
