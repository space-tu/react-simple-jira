import React, { useState, useEffect } from "react";
import { stringify } from "querystring";
import { ProjectSearch } from "./ProjectSearch";
import { ProjectTable } from "./ProjectTable";
import { clearObject, useDidMount, useDebounce } from "../../utils";

const baseApiUrl = process.env.REACT_APP_API_URL;
export const ProjectList = () => {
  const [searchParam, setSearchParam] = useState({
    name: "",
    personId: "",
  });
  const [personList, setPersonList] = useState([]);
  const [tableData, setTableData] = useState([]);

  // 查找 personList
  useDidMount(() => {
    fetch(`${baseApiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setPersonList(await res.json());
      }
    });
  });
  const debounceSearchParam = useDebounce(searchParam, 2000);
  // 查找表格内容
  useEffect(() => {
    fetch(
      `${baseApiUrl}/projects?${stringify(clearObject(debounceSearchParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setTableData(await res.json());
      }
    });
  }, [debounceSearchParam]);

  return (
    <>
      <ProjectSearch
        searchParam={searchParam}
        setSearchParam={setSearchParam}
        personList={personList}
      />
      <ProjectTable tableData={tableData} personList={personList} />
    </>
  );
};
