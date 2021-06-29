import React, { useState, useEffect } from "react";
import { ProjectSearch } from "./ProjectSearch";
import { ProjectTable } from "./ProjectTable";
const baseApiUrl = process.env.REACT_APP_API_URL;
export const ProjectList = () => {
  const [searchParam, setSearchParam] = useState({
    name: "",
    personId: "",
  });
  const [personList, setPersonList] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(`${baseApiUrl}/users`).then(async (res) => {
      console.log(res,baseApiUrl);
      if (res.ok) {
        setPersonList(await res.json());
      }
    });
  }, []);

  useEffect(() => {
    fetch(`${baseApiUrl}/projects`).then(async res =>{
      if (res.ok) {
        setTableData(await res.json())
      }
    })
  }, [searchParam])
  return (
    <div>
      <ProjectSearch
        searchParam={searchParam}
        setSearchParam={setSearchParam}
        personList={personList}
      />
      <ProjectTable tableData={tableData} personList={personList}/>
    </div>
  );
};
