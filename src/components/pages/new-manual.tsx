import * as React from "react";
import DashboardNav from "../organisms/dashboard-nav";
import ManualForm from "../organisms/manual-form";

interface INewManualPageProps {}

const NewManualPage: React.FunctionComponent<INewManualPageProps> = (props) => {
  return (
    <div className="dashboard">
      <DashboardNav />
      <div className="dashboard_tab">
        <ManualForm />
      </div>
    </div>
  );
};

export default NewManualPage;
