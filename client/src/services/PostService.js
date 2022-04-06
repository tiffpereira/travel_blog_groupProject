import Client from './'

export const GetPosts = async () => {
    try {
      const res = await Client.get('/posts')
      console.log(res, 'getting post results')
      return res.data
    } catch (error) {
      throw error
    }
  }


export const GetComments = async (id) => {
    try {
        const res = await Client.get(`/posts/${id}`)
        console.log(res, 'getting comments')
        return res.data.comments
    } catch (error) {
        throw error
    }
}

export const PostComments = async (id) => {
  try {
    const res = await Client.post(`/posts/${id}`)
    console.log(res, 'posting comments')
    return res.data.comments
  } catch (error) {
    throw error
  }
}