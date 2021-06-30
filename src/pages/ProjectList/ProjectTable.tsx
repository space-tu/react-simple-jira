import React from "react";
import type { Person, Project } from "./projectList.d";

interface ProjectTableProps {
  tableData: Project[];
  personList: Person[];
}
export const ProjectTable = ({ tableData, personList }: ProjectTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              {personList.find((person) => person.id === item.personId)?.name ||
                "/"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
