import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { AppDispatch, RootStoreState } from "../../../../redux";
import { setSearchQuery } from "../../../../redux/Slices/FlowSlice";
import DebouncedSearch from "../../../UI/AntD/Input/DebouncedSearch";

const TemplateSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector(
    (state: RootStoreState) => state.flow.searchQuery
  );

  return (
    <DebouncedSearch
      width={250}
      style={{ flexShrink: 1 }}
      placeholder="Search by label"
      prefix={<CiSearch className=".icon" />}
      value={searchQuery}
      handleChange={(value) => {
        dispatch(setSearchQuery(value));
      }}
    />
  );
};

export default TemplateSearch;
