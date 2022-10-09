import ContentWrapper from "../molecules/content-wrapper";
import ManualItem from "../molecules/manual-item";
import Pagination from "../molecules/pagination";
import useAllManuals from "../../hooks/get-all-manuals";

interface IAllManualsProps {}

const AllManuals: React.FunctionComponent<IAllManualsProps> = (props) => {
  const {
    manuals,
    loading,
    totalManual,
    setSortBy,
    pageNumber,
    lastPage,
    setPageNumber,
  } = useAllManuals();
  return (
    <div className="manuals">
      <div className="dashboard_home-head">
        <h1 className="dashboard_home-heading">All Manuals Added</h1>
      </div>
      <ContentWrapper className="manual_wrapper">
        <>
          <div className="manual_head">
            <p>
              {loading
                ? "0"
                : totalManual > 99
                ? "0" + totalManual
                : "00" + totalManual}{" "}
              Manuals Added
            </p>
            <ContentWrapper className="manual_head-select">
              <select
                name="sort by"
                title="sort by"
                id=""
                onChange={(e) => {
                  setSortBy(e.target.value as "newest" | "oldest");
                }}
              >
                <option value="newest" selected>
                  Sort By: Newest
                </option>
                <option value="oldest">Sort By: Oldest</option>
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
                  manualId={manual.id}
                  imgUrl={manual.header_image}
                  title={manual.topic}
                  date={manual.manual_date}
                />
              ))}
            </div>
          )}
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalManual={totalManual}
            currentNumber={manuals.length}
            lastPage={lastPage}
          />
        </>
      </ContentWrapper>
    </div>
  );
};

export default AllManuals;
