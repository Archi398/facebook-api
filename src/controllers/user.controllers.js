import * as userModel from '../../models/user.model';
import * as postsModel from '../../models/posts.model';
import * as ProfileModel from '../../models/profile.model';

export const getUserById = async (_request, response) => {

    const { id } = _request.params;
    response.json({
        user: await userModel.getUserById({
            id: id
        })
    })
}

export const deleteById = async (request, response) => {
    const { id } = request.params;
    await ProfileModel.deleteByUserId(id)
    await postsModel.deleteByAuthorId(id)
    await userModel.deleteById({ id: id })
    response.status(200).json({})
}