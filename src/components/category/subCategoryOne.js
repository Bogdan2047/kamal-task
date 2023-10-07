import { useRef, useState } from "react";
import "./category.css";
import { SubCategoryTwo } from "./subCategoryTwo";
import Lines from "./lines";
import HorizontalLine from "./horizontalLine";

export const SubCategoryOne = ({
  handleDeleteSubOneCategory,
  handleEditSubOneCategory,
  handleAddSubOneCategory,
  handleDeleteSubTwoCategory,
  handleEditSubTwoCategory,
  handleAddSubTwoCategory,
  handleDeleteSubTreeCategory,
  handleEditSubTreeCategory,
  index,
  item,
  categoryName,
  x,
  y,
  offsetX,
  offsetY,
}) => {
  const [newNameOne, setNewNameOne] = useState("");

  const [showButtonOne, setShowButtonOne] = useState(true);
  const [changeStyleForOne, setChangeStyleForOne] = useState(false);

  const inputRefOne = useRef(null);

  const handleClickOne = () => {
    inputRefOne.current.focus();
    setShowButtonOne(false);
  };

  const handleChangedCategoryNameOne = (newNameOne, index) => {
    handleEditSubOneCategory(newNameOne, index);
    setShowButtonOne(true);
    setChangeStyleForOne(index);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        className={
          index === changeStyleForOne
            ? "styleForSubCategotyOne"
            : "styleForSubCategoty"
        }
        placeholder={item.name}
        ref={inputRefOne}
        onChange={(e) => setNewNameOne(e.target.value)}
        value={newNameOne ? newNameOne : item.name}
      />
      {showButtonOne ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 5,
            width: 205,
          }}
        >
          <button
            onClick={() => handleDeleteSubOneCategory(index)}
            style={{
              backgroundColor: "red",
              color: "white",
              borderStyle: "none",
            }}
          >
            del
          </button>
          <button
            onClick={handleClickOne}
            style={{
              backgroundColor: "grey",
              color: "white",
              borderStyle: "none",
            }}
          >
            change
          </button>
          <button
            onClick={() => handleAddSubOneCategory(index)}
            style={{
              backgroundColor: "green",
              color: "white",
              borderStyle: "none",
            }}
          >
            +
          </button>
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingTop: 5,
              width: 205,
            }}
          >
            <button
              onClick={() => handleChangedCategoryNameOne(newNameOne, index)}
              style={{
                backgroundColor: "green",
                color: "white",
                borderStyle: "none",
              }}
            >
              yes
            </button>
            <button
              onClick={() => setShowButtonOne(true)}
              style={{
                backgroundColor: "red",
                color: "white",
                borderStyle: "none",
              }}
            >
              no
            </button>
          </div>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 10,
        }}
      >
        {item.subCategoryOne
          ? item.subCategoryOne.map((el, indexSubOne) => (
              <div className="spaceBLocks">
                <HorizontalLine x1={"100%"} y1={0} y={5} />
                <Lines x1={x} y1={y} x2={x + offsetX} y2={y + offsetY} />

                <SubCategoryTwo
                  key={indexSubOne}
                  el={el}
                  indexSubOne={indexSubOne}
                  index={index}
                  handleDeleteSubOneCategory={handleDeleteSubOneCategory}
                  handleEditSubOneCategory={handleEditSubOneCategory}
                  handleAddSubOneCategory={handleAddSubOneCategory}
                  handleDeleteSubTwoCategory={handleDeleteSubTwoCategory}
                  handleEditSubTwoCategory={handleEditSubTwoCategory}
                  handleAddSubTwoCategory={handleAddSubTwoCategory}
                  handleDeleteSubTreeCategory={handleDeleteSubTreeCategory}
                  handleEditSubTreeCategory={handleEditSubTreeCategory}
                  categoryName={categoryName}
                  x={100}
                  y={0}
                  offsetX={0}
                  offsetY={50}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
