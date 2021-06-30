import React, { useState, useEffect } from "react";
import * as qs from "qs";
import { ProjectSearch } from "./ProjectSearch";
import { ProjectTable } from "./ProjectTable";
import { clearObject } from "../../utils";
const baseApiUrl = process.env.REACT_APP_API_URL;
export const ProjectList = () => {
  const [searchParam, setSearchParam] = useState({
    name: "",
    personId: "",
  });
  const [personList, setPersonList] = useState([]);
  const [tableData, setTableData] = useState([]);

  // 查找 personList
  useEffect(() => {
    fetch(`${baseApiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setPersonList(await res.json());
      }
    });
  }, []);

  // 查找表格内容
  useEffect(() => {
    fetch(
      `${baseApiUrl}/projects?${qs.stringify(clearObject(searchParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setTableData(await res.json());
      }
    });
  }, [searchParam]);

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
