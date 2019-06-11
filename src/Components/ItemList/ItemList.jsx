import React from "react";

import { Button } from "../Button";

import ItemListContainer from "./ItemList.container";
import styles from "./ItemList.module.css";

const ItemList = ({ items, activeItem = "", changeItem }) => {
  const activeItemMsg = activeItem ? `Selected: ${activeItem}` : "";
  return (
    <div>
      <div className={styles.listContainer}>
        {items.map(item => (
          <div key={item.id} className={styles.item}>
            <Button onClick={changeItem} value={item.title}>
              {item.title}
            </Button>
          </div>
        ))}
      </div>
      <h4>{activeItemMsg}</h4>
    </div>
  );
};

export default ItemListContainer(ItemList);
