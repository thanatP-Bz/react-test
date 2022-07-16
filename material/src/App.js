import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function App() {
  return (
    <div>
      <Button startIcon={<ArrowBackIosNewIcon />} variant="contained">
        click
      </Button>
    </div>
  );
}

export default App;
