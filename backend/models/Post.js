import Sequelize, { DataTypes } from 'sequelize';
import db from '../config/db.js';

const posts = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
  },
  post_title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  post_at: { type: DataTypes.DATE }
}

export const Posts = db.define('posts', posts);
