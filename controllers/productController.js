const { Product, Category, Tag, ProductTag } = require('../models');

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll({
        include: [Category, Tag],
      });
      res.status(200).json(products);
    } catch (error) {
      console.error('Error getting products:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id, {
        include: [Category, Tag],
      });
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json(product);
      }
    } catch (error) {
      console.error('Error getting product by id:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  createProduct: async (req, res) => {
    const { product_name, price, category_id, tagIds } = req.body;
    try {
      const product = await Product.create({
        product_name,
        price,
        category_id,
      });

      if (tagIds && tagIds.length) {
        const productTags = tagIds.map((tagId) => ({
          product_id: product.id,
          tag_id: tagId,
        }));
        await ProductTag.bulkCreate(productTags);
      }

      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { product_name, price, category_id, tagIds } = req.body;
    try {
      const updatedProduct = await Product.update(
        {
          product_name,
          price,
          category_id,
        },
        { where: { id } }
      );

      if (tagIds && tagIds.length) {
        await ProductTag.destroy({ where: { product_id: id } });

        const productTags = tagIds.map((tagId) => ({
          product_id: id,
          tag_id: tagId,
        }));
        await ProductTag.bulkCreate(productTags);
      }

      if (updatedProduct[0] === 0) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json({ message: 'Product updated successfully' });
      }
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await Product.destroy({ where: { id } });
      if (deletedProduct === 0) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json({ message: 'Product deleted successfully' });
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = productController;