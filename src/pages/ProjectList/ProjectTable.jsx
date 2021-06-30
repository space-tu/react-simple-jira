import React from "react";

export const ProjectTable = ({ tableData, personList }) => {
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
