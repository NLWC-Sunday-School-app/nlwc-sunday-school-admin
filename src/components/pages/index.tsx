import * as React from "react";
import DashboardHome from "../organisms/dashboard-home";
import DashboardNav from "../organisms/dashboard-nav";

interface IIndexPageProps {}

const IndexPage: React.FunctionComponent<IIndexPageProps> = (props) => {
  return (
    <div className="dashboard">
      <DashboardNav />
      <div className="dashboard_tab">
        <DashboardHome />
      </div>
    </div>
  );
};

export default IndexPage;
