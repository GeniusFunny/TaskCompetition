import ajax from './ajax'
const Login = (code) => {
  return ajax('/user/login', 'post', {code: code})
}
const GetUserInfo = () => {
  return ajax('/user/info')
}
const GetScore = () => {
  return ajax('/user/score', 'get')
}
const GetCurrentTask = () => {
  return ajax('/task/pending', 'get')
}
const UpLoad = (data) => {
  return ajax('', '', data)
}
const DownLoad = (data) => {
  return ajax('', 'get', data)
}
const UpdateUserInfo = (data) => {
  return ajax('/user/info', 'put', data)
}
const CreateNewTask = (data) => {
  return ajax('/task/group', 'post', data)
}
const GetHistory = (id) => {
  return ajax('/task/history', 'get_restful', {id: id})
}
export {
  DownLoad,
  UpLoad,
  UpdateUserInfo,
  Login,
  GetScore,
  GetHistory,
  GetUserInfo,
  GetCurrentTask,
  CreateNewTask
}
