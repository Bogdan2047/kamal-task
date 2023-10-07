import { useRef, useState } from "react";
import "./category.css";
import { SubCategoryTree } from "./subCategoryTree";
import Lines from "./lines";
import HorizontalLine from "./horizontalLine";

export const SubCategoryTwo = ({
  handleDeleteSubTwoCategory,
  handleEditSubTwoCategory,
  handleAddSubTwoCategory,
  handleDeleteSubTreeCategory,
  handleEditSubTreeCategory,
  indexSubOne,
  index,
  el,
  categoryName,
  x,
  y,
  offsetX,
  offsetY,
}) => {
  const [newNameTwo, setNewNameTwo] = useState("");

  const [showButtonTwo, setShowButtonTwo] = useState(true);
  const [changeStyleForTwo, setChangeStyleForTwo] = useState(false);

  const inputRefTwo = useRef(null);

  const handleClickTwo = () => {
    inputRefTwo.current.focus();
    setShowButtonTwo(false);
  };

  const handleChangedCategoryNameTwo = (newNameTwo, indexSubOne) => {
    handleEditSubTwoCategory(newNameTwo, index, indexSubOne);
    setShowButtonTwo(true);
    setChangeStyleForTwo(indexSubOne);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        className={
          indexSubOne === changeStyleForTwo
            ? "styleForSubCategotyTwo"
            : "styleForSubCategoty"
        }
        placeholder={el.name}
        ref={inputRefTwo}
        onChange={(e) => setNewNameTwo(e.target.value)}
        value={newNameTwo ? newNameTwo : categoryName}
      />
      {showButtonTwo ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 5,
            width: 205,
          }}
        >
          <button
            onClick={() => handleDeleteSubTwoCategory(index, indexSubOne)}
            style={{
              backgroundColor: "red",
              color: "white",
              borderStyle: "none",
            }}
          >
            del
          </button>
          <button
            onClick={handleClickTwo}
            style={{
              backgroundColor: "grey",
              color: "white",
              borderStyle: "none",
            }}
          >
            change
          </button>
          <button
            onClick={() => handleAddSubTwoCategory(index, indexSubOne)}
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
              onClick={() =>
                handleChangedCategoryNameTwo(newNameTwo, index, indexSubOne)
              }
              style={{
                backgroundColor: "green",
                color: "white",
                borderStyle: "none",
              }}
            >
              yes
            </button>
            <button
              onClick={() => setShowButtonTwo(true)}
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
        {el.subCategoryTwo
          ? el.subCategoryTwo.map((subTwo, indexSubTwo) => (
              <div className="spaceBLocks">
                <HorizontalLine x1={"100%"} y1={0} y={5} />
                <Lines x1={x} y1={y} x2={x + offsetX} y2={y + offsetY} />

                <SubCategoryTree
                  subTwo={subTwo}
                  key={indexSubTwo}
                  indexSubTwo={indexSubTwo}
                  indexSubOne={indexSubOne}
                  index={index}
                  handleDeleteSubTreeCategory={handleDeleteSubTreeCategory}
                  handleEditSubTreeCategory={handleEditSubTreeCategory}
                  categoryName={categoryName}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
