import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import {
  AD_INSIGHT_TABLE_DATA_COLUMNS,
  AD_INSIGHT_TABLE_DATA,
} from "./data/adInsight";
import GraphicalWidget from "./components/GraphicalWidget/GraphicalWidget";
import {
  AD_INSIGHT_GRAPHICAL_DATA_COLUMNS,
  AD_INSIGHT_GRAPHICAL_DATA,
} from "./data/addInsignt";
import TabularWidget from "./components/TabularWidget/TabularWidget";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 grid-rows-1 gap-x-10">
        <div className="pt-72">
          <TabularWidget
            columnsConfig={AD_INSIGHT_TABLE_DATA_COLUMNS}
            data={AD_INSIGHT_TABLE_DATA}
            widgetTitle="Ad Insights"
          />
        </div>
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
