const { Category } = require('../models');

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      console.error('Error getting categories:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getCategoryById: async (req, res) => {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.status(200).json(category);
      }
    } catch (error) {
      console.error('Error getting category by id:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  createCategory: async (req, res) => {
    const { category_name } = req.body;
    try {
      const category = await Category.create({ category_name });
      res.status(201).json(category);
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateCategory: async (req, res) => {
    const { id } = req.params;
    const { category_name } = req.body;
    try {
      const updatedCategory = await Category.update(
        { category_name },
        { where: { id } }
      );
      if (updatedCategory[0] === 0) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.status(200).json({ message: 'Category updated successfully' });
      }
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteCategory: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCategory = await Category.destroy({ where: { id } });
      if (deletedCategory === 0) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.status(200).json({ message: 'Category deleted successfully' });
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = categoryController;