import * as React from "react";
import DashboardNav from "../organisms/dashboard-nav";
import EditManualForm from "../organisms/edit-manual-form";

interface IEditManualPageProps {}

const EditManualPage: React.FunctionComponent<IEditManualPageProps> = (
  props
) => {
  return (
    <div className="dashboard">
      <DashboardNav />
      <div className="dashboard_tab">
        <EditManualForm />
      </div>
    </div>
  );
};

export default EditManualPage;
