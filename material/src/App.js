import {
  Navbar,
  SideBar,
  RightBar,
  Feed,
} from "../src/components/navigation/index";
import { Box, Container, Stack } from "@mui/material";
function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
