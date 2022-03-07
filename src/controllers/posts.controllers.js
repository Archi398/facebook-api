import * as PostsModel from '../../models/posts.model';

export const getAllPost = async (_request, response) => {
  response.json({
    posts: await PostsModel.getAllPost()
  });
}

export const getPostById = async (_request, response) => {
  const id = _request.params.id;

  response.json({
    post: await PostsModel.getPostById(Number(id))
  })
}

export const getByAuthorId = async (_request, response) => {
  const id = _request.params.id;

  response.json({
    post: await PostsModel.getByAuthorId(id)
  })
}

export const createPost = async (_request, response) => {
  const postsData = _request.body;
  const post = await PostsModel.createPost({
    message: postsData.message,
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: postsData.authorId
  });
  response.status(201).json(post);
}

export const updatePost = async (_request, response) => {
  const postsData = _request.body;
  const { id } = _request.params;

  const posts = await PostsModel.updateById({
    id: Number(id),
    message: postsData.message,
    updatedAt: new Date()
  })
  response.json({ posts });
}

export const deleteById = async (_request, response) => {
  const { id } = _request.params;
  if (!Number.isInteger(+id)) {
    response.json({ error: "undifined ID" })
  } else {
    const result = await PostsModel.deleteById(Number(id))
    response.json({})
  }
}

