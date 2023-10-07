import { useRef, useState } from "react";
import "./category.css";

export const SubCategoryTree = ({
  handleDeleteSubTreeCategory,
  handleEditSubTreeCategory,
  indexSubOne,
  index,
  categoryName,
  indexSubTwo,
  subTwo,
}) => {
  const [newNameTree, setNewNameTree] = useState("");

  const [showButtonTree, setShowButtonTree] = useState(true);
  const [changeStyleForTree, setChangeStyleForTree] = useState(false);

  const inputRefTree = useRef(null);

  const handleClickTree = () => {
    inputRefTree.current.focus();
    setShowButtonTree(false);
  };

  const handleChangedCategoryNameTree = (
    newName,
    index,
    indexSubOne,
    indexSubTwo
  ) => {
    handleEditSubTreeCategory(newName, index, indexSubOne, indexSubTwo);
    setShowButtonTree(true);
    setChangeStyleForTree(indexSubTwo);
  };

  return (
    <div>
      <input
        className={
          indexSubTwo === changeStyleForTree
            ? "styleForSubCategotyTree"
            : "styleForSubCategoty"
        }
        placeholder={subTwo.name}
        ref={inputRefTree}
        onChange={(e) => setNewNameTree(e.target.value)}
        value={newNameTree ? newNameTree : categoryName}
      />
      {showButtonTree ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 5,
            width: 205,
          }}
        >
          <button
            onClick={() =>
              handleDeleteSubTreeCategory(index, indexSubOne, indexSubTwo)
            }
            style={{
              backgroundColor: "red",
              color: "white",
              borderStyle: "none",
            }}
          >
            del
          </button>
          <button
            onClick={handleClickTree}
            style={{
              backgroundColor: "grey",
              color: "white",
              borderStyle: "none",
            }}
          >
            change
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
                handleChangedCategoryNameTree(
                  newNameTree,
                  index,
                  indexSubOne,
                  indexSubTwo
                )
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
              onClick={() => setShowButtonTree(true)}
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
    </div>
  );
};
