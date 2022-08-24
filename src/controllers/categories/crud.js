const { insertCategoryQuery, updateCategoryQuery, deleteCategoryQuery } = require("../../database/queries/categories");

const insertCategory = (req, res, next) => {
  console.log(req.body);
  const { name, color } = req.body;
  console.log(name, color);
  insertCategoryQuery(name, color)
    .then(() => res.status(201).send("Category is added successfully"))
    .catch((err) => next(err));
};

const updateCategory = (req, res, next) => {
  const { id, name, color } = req.body;
  updateCategoryQuery(id, name, color)
    .then(() => res.status(201).send("Category is updated successfully"))
    .catch((err) => next(err));
};

const deleteCategory = (req, res, next) => {
  const { id } = req.body;
  deleteCategoryQuery(id)
    .then(() => res.status(201).send("Category is deleted successfully"))
    .catch((err) => next(err));
};

module.exports = { insertCategory, updateCategory, deleteCategory };
