'use strict'

function isThisType(val) {
  for (const key in this) {
    if (this[key] === val) {
      return true
    }
  }
  return false
}

// [ 100, 101, 102, 200 ]
function getEnum() {
  return Object.keys(this).map(key => this[key]).filter(value => typeof value === 'number')
}

// USER_MINI_PROGRAM:100；USER_EMAIL:101；USER_MOBILE:102；ADMIN_EMAIL:200
function getDoc() {
  return this.description + '=>' + Object.keys(this)
    .filter(key => typeof this[key] === 'number')
    .map(key => key + ':' + this[key])
    .join('；')
}

const LoginType = {
  USER_MINI_PROGRAM: 100,
  USER_EMAIL: 101,
  USER_MOBILE: 102,
  ADMIN_EMAIL: 200,
  isThisType,
  getEnum,
  getDoc,
  description: '登录类型',
}

const ArtType = {
  MOVIE: 100,
  MUSIC: 200,
  SENTENCE: 300,
  BOOK: 400,
  isThisType,
  getEnum,
  getDoc,
  description: '期刊类型',
}

module.exports = {
  LoginType,
  ArtType
}