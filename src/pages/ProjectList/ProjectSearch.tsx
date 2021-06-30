import React from "react";
import type { Person } from "./projectList.d";
interface ProjectSearchProps {
  searchParam: {
    name: string;
    personId: string;
  };
  setSearchParam: (params: ProjectSearchProps["searchParam"]) => void;
  personList: Person[];
}
export const ProjectSearch = ({
  searchParam,
  setSearchParam,
  personList,
}: ProjectSearchProps) => {
  return (
    <form>
      <input
        type="text"
        value={searchParam.name}
        onChange={(e) => {
          setSearchParam({
            ...searchParam,
            name: e.target.value,
          });
        }}
      />
      <select
        value={searchParam.personId}
        onChange={(e) => {
          setSearchParam({
            ...searchParam,
            personId: e.target.value,
          });
        }}
      >
        <option value="">请选择负责人</option>
        {personList.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};
