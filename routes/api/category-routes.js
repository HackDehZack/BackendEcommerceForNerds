const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
  try {
    // Find all categories
    const categories = await Category.findAll({
      include: [Product], // Include associated Products
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Find one category by its `id` value
    const category = await Category.findByPk(req.params.id, {
      include: [Product], // Include associated Products
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json(category);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // Create a new category
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // Update a category by its `id` value
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json({ message: 'Category updated successfully' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // Delete a category by its `id` value
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json({ message: 'Category deleted successfully' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;