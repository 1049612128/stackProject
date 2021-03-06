import fetch from 'common/fetch'

/**
 * 登陆接口
 * @param {*userName,userPwd} param
 */
export function login (param) {
  return fetch({
    url: '/users/login',
    method: 'post',
    data: param
  })
}

/**
 * 登出接口
 */
export function logout () {
  return fetch({
    url: '/users/logout',
    method: 'post'
  })
}

/**
 * 是否登录
 */
export function checkLogin () {
  return fetch({
    url: '/users/checkLogin',
    method: 'get'
  })
}

/**
 * goods 列表
 * @param {*} param
 */
export function goodsList (param) {
  return fetch({
    url: '/goods/list',
    methods: 'get',
    params: param
  })
}

/**
 * addCart 加入购物车
 * @param {*} param
 */
export function addCart (param) {
  return fetch({
    url: '/goods/addCart',
    method: 'post',
    data: param
  })
}

/**
 * cartsList 获取购物车列表
 */
export function cartsList () {
  return fetch({
    url: '/users/cartList',
    method: 'get'
  })
}

/**
 * cartDel 购物车删除
 */
export function cartDel (param) {
  return fetch({
    url: '/users/cartDel',
    method: 'post',
    data: param
  })
}

/**
 * cartEdit 购物车编辑
 */
export function cartEdit (param) {
  return fetch({
    url: '/users/cartEdit',
    method: 'post',
    data: param
  })
}

/**
 * cartCheckAll 购物车全选
 */
export function cartCheckAll (param) {
  return fetch({
    url: '/users/cartCheckAll',
    method: 'post',
    data: param
  })
}

/**
 * getCartCount 购物车总数
 */
export function getCartCount (param) {
  return fetch({
    url: '/users/getCartCount',
    method: 'post',
    data: param
  })
}
