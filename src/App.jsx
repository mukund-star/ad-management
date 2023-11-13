import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import GraphicalWidget from "./components/GraphicalWidget/GraphicalWidget";
import {
  AD_INSIGHT_GRAPHICAL_DATA_COLUMNS,
  AD_INSIGHT_GRAPHICAL_DATA,
} from "./data/addInsignt";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 grid-rows-1 gap-x-10">
        <div>Cell 1</div>
        <div>
          <GraphicalWidget
            columnsConfig={AD_INSIGHT_GRAPHICAL_DATA_COLUMNS}
            data={AD_INSIGHT_GRAPHICAL_DATA}
            widgetTitle="Ad Insights"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
