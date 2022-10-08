import * as React from "react";
import AllManuals from "../organisms/all-manuals";
import DashboardNav from "../organisms/dashboard-nav";

interface IManualsPageProps {}

const ManualsPage: React.FunctionComponent<IManualsPageProps> = (props) => {
  return (
    <div className="dashboard">
      <DashboardNav activePage="All Manuals" />
      <div className="dashboard_tab">
        <AllManuals />
      </div>
    </div>
  );
};

export default ManualsPage;
