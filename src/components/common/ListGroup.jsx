import React from "react";
const Listgroup = (props) => {
  const { items, onItemSelect, selectedItem, textProperty, valueProperty } =
    props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          style={{
            marginLeft: -60,
            marginRight: 60,
            paddingTop: 10,
            textAlign: "center",
          }}
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
Listgroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default Listgroup;
