const { Tag, Product, ProductTag } = require('../models');

const tagController = {
  getAllTags: async (req, res) => {
    try {
      const tags = await Tag.findAll();
      res.status(200).json(tags);
    } catch (error) {
      console.error('Error getting tags:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getTagById: async (req, res) => {
    const { id } = req.params;
    try {
      const tag = await Tag.findByPk(id, {
        include: [Product],
      });
      if (!tag) {
        res.status(404).json({ message: 'Tag not found' });
      } else {
        res.status(200).json(tag);
      }
    } catch (error) {
      console.error('Error getting tag by id:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  createTag: async (req, res) => {
    const { tag_name } = req.body;
    try {
      const tag = await Tag.create({ tag_name });
      res.status(201).json(tag);
    } catch (error) {
      console.error('Error creating tag:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateTag: async (req, res) => {
    const { id } = req.params;
    const { tag_name } = req.body;
    try {
      const updatedTag = await Tag.update(
        { tag_name },
        { where: { id } }
      );
      if (updatedTag[0] === 0) {
        res.status(404).json({ message: 'Tag not found' });
      } else {
        res.status(200).json({ message: 'Tag updated successfully' });
      }
    } catch (error) {
      console.error('Error updating tag:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteTag: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedTag = await Tag.destroy({ where: { id } });
      if (deletedTag === 0) {
        res.status(404).json({ message: 'Tag not found' });
      } else {
        res.status(200).json({ message: 'Tag deleted successfully' });
      }
    } catch (error) {
      console.error('Error deleting tag:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = tagController;