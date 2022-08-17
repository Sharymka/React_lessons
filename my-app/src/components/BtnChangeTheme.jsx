import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function BtnChangeTheme() {
  return (
    <IconButton color="primary" aria-label="upload picture" component="label">
      <input hidden accept="image/*" type="file" />
      <PhotoCamera />
    </IconButton>
  );
}
