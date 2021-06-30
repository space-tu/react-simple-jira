import React from "react";

export const ProjectSearch = ({ searchParam, setSearchParam, personList }) => {
  return (
    <form>
      <div>
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
          {personList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
