import "./App.css";
import React, { useState } from "react";
import { Category } from "./components/category/category";

function App() {
  const [categories, setCategories] = useState([
    {
      name: "Kateqoriya",
      subcategories: [],
    },
  ]);

  const handleDeleteCategory = (index) => {
    console.log(index);
    const updatedCategories = [...categories];
    updatedCategories.forEach((item) => {
      item.subcategories = item.subcategories.filter(
        (_, subIndex) => subIndex !== index
      );
    });
    setCategories(updatedCategories);
  };

  const handleEditCategory = (newName) => {
    const updatedCategories = [...categories];
    updatedCategories.name = newName;
    setCategories(updatedCategories);
  };

  const handleAddCategory = () => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) => {
      let newSubCategory = { name: "altKateqoriya", subCategoryOne: [] };
      item.subcategories.push(newSubCategory);
      return item;
    });
    setCategories(updatedCategories);
  };

  const handleDeleteSubOneCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.forEach((item) => {
      item.subcategories = item.subcategories.filter(
        (_, subIndex) => subIndex !== index
      );
    });
    setCategories(updatedCategories);
  };

  const handleEditSubOneCategory = (newNameOne, index) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) =>
      item.subcategories.map((el, i) => {
        if (i === index) {
          el.name = newNameOne;
        }
        return el;
      })
    );
    setCategories(updatedCategories);
  };

  const handleAddSubOneCategory = (id) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) => {
      let newCategory = { name: "altKateqoriya 2", subCategoryTwo: [] };
      item.subcategories.map((el, index) => {
        if (index === id) {
          el.subCategoryOne.push(newCategory);
        }
        return el;
      });
      return item;
    });
    console.log(updatedCategories);
    setCategories(updatedCategories);
  };

  const handleDeleteSubTwoCategory = (index, indexSubOne) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) =>
      item.subcategories.map((sub, indexSub) => {
        if (indexSub === index) {
          sub.subCategoryOne = sub.subCategoryOne.filter(
            (_, subIndex) => subIndex !== indexSubOne
          );
        }
      })
    );
    setCategories(updatedCategories);
  };

  const handleEditSubTwoCategory = (newNameTwo, index, indexSubOne) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) =>
      item.subcategories.map((el, i) => {
        if (i === index) {
          el.subCategoryOne.map((subTwo, indexSubTwo) => {
            if (indexSubTwo === indexSubOne) {
              subTwo.name = newNameTwo;
            }
            return subTwo;
          });
        }
        return el;
      })
    );
    setCategories(updatedCategories);
  };

  const handleAddSubTwoCategory = (id, indexSubOne) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) => {
      let newCategory = { name: "altKateqoriya 3" };
      item.subcategories.map((el, index) => {
        if (index === id) {
          el.subCategoryOne.map((subTwo, i) => {
            if (i === indexSubOne) {
              subTwo.subCategoryTwo.push(newCategory);
            }
          });
        }
        return el;
      });
      return item;
    });
    setCategories(updatedCategories);
  };

  const handleDeleteSubTreeCategory = (index, indexSubOne, indexSubTwo) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) =>
      item.subcategories.map((sub, indexSub) => {
        if (indexSub === index) {
          sub.subCategoryOne.map((subOne, iSubOne) => {
            if (iSubOne === indexSubOne) {
              subOne.subCategoryTwo = subOne.subCategoryTwo.filter(
                (_, subIndex) => subIndex !== indexSubTwo
              );
            }
          });
        }
      })
    );
    setCategories(updatedCategories);
  };

  const handleEditSubTreeCategory = (
    newNameTree,
    newNameTwo,
    index,
    indexSubOne
  ) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) =>
      item.subcategories.map((el, i) => {
        if (i === index) {
          el.subCategoryOne.map((subTwo, indexSubTwo) => {
            if (indexSubTwo === indexSubOne) {
              subTwo.subCategoryTwo.map((subTree, indexSubTree) => {
                if (indexSubTree === newNameTwo) {
                  subTree.name = newNameTree;
                }
                return subTree;
              });
            }
          });
        }
      })
    );
    setCategories(updatedCategories);
  };

  return (
    <div className="mainBlock">
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 20, fontWeight: 500 }}>
          Task for the Kamal company
        </span>
      </div>
      {categories.map((category, index) => (
        <div>
          <Category
            key={index}
            categoryName={category.name}
            subcategoryName={category.subcategories}
            handleEditCategory={handleEditCategory}
            handleDeleteCategory={handleDeleteCategory}
            handleAddCategory={handleAddCategory}
            handleDeleteSubOneCategory={handleDeleteSubOneCategory}
            handleEditSubOneCategory={handleEditSubOneCategory}
            handleAddSubOneCategory={handleAddSubOneCategory}
            handleDeleteSubTwoCategory={handleDeleteSubTwoCategory}
            handleAddSubTwoCategory={handleAddSubTwoCategory}
            handleEditSubTwoCategory={handleEditSubTwoCategory}
            handleDeleteSubTreeCategory={handleDeleteSubTreeCategory}
            handleEditSubTreeCategory={handleEditSubTreeCategory}
            x={100}
            y={0}
            offsetX={0}
            offsetY={50}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
