import axios from 'axios'

const baseURL = 'http://localhost:3000/v1/'
// 获取所有的文章
export const getArticleAll = (params = {}) =>
  axios.get(`${baseURL}articles`, {
    params
  })

// 获取文章详情
// export const getDetail = postId =>
//   axios.get(`${baseURL}details?postId=${postId}`)

// // 获取所有的标签
// export const getTagsAll = () => axios.get(`${baseURL}tags`)

// // 获取标签下所有的文章
// export const getTagArticle = tagId => axios.get(`${baseURL}tags?tagId=${tagId}`)

// // 文章阅读次数
// export const readCountIncrease = postId =>
//   axios.post(`${baseURL}readNum`, {
//     postId: postId
//   })
