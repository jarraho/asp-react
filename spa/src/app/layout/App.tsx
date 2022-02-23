import { CssBaseline } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {

return (
    <div className="bg-greay" >
      <CssBaseline />
<Header />  
 <Catalog  />

    </div>
  );
}

export default App;
