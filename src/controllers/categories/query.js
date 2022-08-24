const {
  insertCategoryQuery,
  updateCategoryQuery,
  deleteCategoryQuery,
  getAllCategoriesQuery,
  getAllCategoriesByIdQuery,
} = require("../../database/queries/categories");

const getAllCategories = (req, res, next) => {
  getAllCategoriesQuery()
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => next(err));
};

const getCategoriesById = (req, res, next) => {
  const { id } = req.body;
  getAllCategoriesByIdQuery(id)
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => next(err));
};

module.exports = { getAllCategories, getCategoriesById };
