import { useState } from "react";
import ContentWrapper from "../molecules/content-wrapper";
import ManualItem from "../molecules/manual-item";
import Manual from "../../assets/manual.png";
import Pagination from "../molecules/pagination";
import useAllManuals from "../../hooks/get-all-manuals";

interface IAllManualsProps {}

const AllManuals: React.FunctionComponent<IAllManualsProps> = (props) => {
  const { manuals, loading, totalManual } = useAllManuals();
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="manuals">
      <div className="dashboard_home-head">
        <h1 className="dashboard_home-heading">All Manuals Added</h1>
      </div>
      <ContentWrapper className="manual_wrapper">
        <>
          <div className=" manual_head">
            <p>002 Manuals Added</p>
            <ContentWrapper className="manual_head-select">
              <select name="sort by" title="sort by" id="">
                <option value="latest">Sort By</option>
                <option value="latest">New Manuals First</option>
                <option value="latest">New Manuals First</option>
              </select>
            </ContentWrapper>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="manual_items">
              {manuals.map((manual, index) => (
                <ManualItem
                  key={manual.topic}
                  imgUrl={manual.header_image}
                  title={manual.topic}
                  date={manual.manual_date}
                />
              ))}
            </div>
          )}
          {totalManual > 10 ? <Pagination /> : ""}
        </>
      </ContentWrapper>
    </div>
  );
};

export default AllManuals;
