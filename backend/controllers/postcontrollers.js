import { Posts } from '../models/Post.js';

export const obtenerPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll();
    res.json({posts});
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

export const crearPost = async (req, res) => {
  try {
    const post = new Posts(req.body);
    post.save();
    res.json(post);
  } catch (error) {
    console.log(error);
  }
}

export const actualizarPost = async (req, res) => {
  try {
    const { post_title, description, post_at } = req.body;
    const post = await Posts.findOne({ where: { id: req.params.id } });

    if(post === null) {
      return res.status(404).json({msg: 'Post no encontrado'});
    }

    await Posts.update({ 
      post_title: post_title, 
      description: description, 
      post_at: post_at
     },{ 
      where: { 
       id: req.params.id, 
      } 
   })

   res.json({msg: 'Post Actualizado'});
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

export const eliminarPost = async (req, res) => {
  try {
    await Posts.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({msg: 'Post eliminado'});
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}