const Category = require('../modal/category.modal'); // Import the Category model

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const category = new Category({ categoryName });
    const newCategory = await category.save();
    res.json({
      status: 200,
      data: newCategory,
      message: "Category created successfully",
    });
  } catch (error) {
    console.error("Failed to create category:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to create category",
    });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json({
      status: 200,
      data: categories,
      message: "Categories retrieved successfully",
    });
  } catch (error) {
    console.error("Failed to get categories:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to get categories",
    });
  }
};

// Get a single category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        status: 404,
        message: "Category not found",
      });
    }
    res.json({
      status: 200,
      data: category,
      message: "Category retrieved successfully",
    });
  } catch (error) {
    console.error("Failed to get category:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to get category",
    });
  }
};

// Update a category
exports.updateCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { categoryName },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({
        status: 404,
        message: "Category not found",
      });
    }
    res.json({
      status: 200,
      data: updatedCategory,
      message: "Category updated successfully",
    });
  } catch (error) {
    console.error("Failed to update category:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to update category",
    });
  }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({
        status: 404,
        message: "Category not found",
      });
    }
    res.json({
      status: 200,
      data: deletedCategory,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("Failed to delete category:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to delete category",
    });
  }
};
