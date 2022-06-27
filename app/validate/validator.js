'use strict'

const {
  LinValidator,
  Rule
} = require('../lin-validator/index')

const {
  LoginType,
  ArtType
} = require('../utils/enum')

class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super()
    this.id = [
      new Rule('isInt', '需要是正整数', {
        min: 1
      }),
    ]
  }
}

class RegisterValidator extends LinValidator {
  constructor() {
    super()
    this.email = [
      new Rule('isEmail', '不符合Email规范')
    ]
    this.password1 = [
      // 用户指定范围 123456 $^
      new Rule('isLength', '密码至少6个字符，最多32个字符', {
        min: 6,
        max: 32
      }),
      new Rule('matches', '密码不符合规范', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]')

    ]
    this.password2 = this.password1
    this.nickname = [
      new Rule('isNotEmpty', '昵称（手机号）不可为空'),
    ]
  }

  validateMobile(vals) {
    const mobile = vals.body.nickname.toString()
    if (mobile.length !== 1 && mobile[0] !== '1') {
      return [false, '手机号不合法']
    }
    return true
  }
}

class TokenValidator extends LinValidator {
  constructor() {
    super()
    this.email = [
      new Rule('isOptional'),
      new Rule('isEmail', '不符合Email规范')
    ]
    this.code = [
      new Rule('isOptional'),
      new Rule('isLength', '至少10个字符', {
        min: 10,
        max: 128
      })
    ]
    this.secret = [
      new Rule('isOptional'),
      new Rule('isLength', '至少6个字符', {
        min: 6,
        max: 128
      })
    ]
  }

  validateLoginType(vals) {
    const type = vals.body.type
    const email = vals.body.email
    const code = vals.body.code
    const secret = vals.body.secret
    if (!type) {
      return [false, 'type是必须参数']
    }
    if (!LoginType.isThisType(type)) {
      return [false, 'type参数不合法']
    }

    if (type === LoginType.USER_EMAIL && (!email || !secret)) {
      return [false, '邮箱或密码字段必传']
    }

    if (type === LoginType.USER_MINI_PROGRAM && !code) {
      return [false, '小程序 code 必传']
    }
    return true
  }
}

class SmsLoginValidator extends LinValidator {
  validateMobile(vals) {
    const mobile = vals.body.mobile.toString()
    const code = vals.body.code.toString()
    if (mobile.length !== 11 || mobile[0] !== '1') {
      return [false, '手机号不合法']
    }
    if (code.length !== 4) {
      return [false, '验证码不合法']
    }
    return true
  }
}

class SendSmsValidator extends LinValidator {
  validateMobile(vals) {
    const mobile = vals.query.mobile.toString()
    if (mobile.length !== 11 || mobile[0] !== '1') {
      return [false, '手机号不合法']
    }
    return true
  }
}

class NotEmptyValidator extends LinValidator {
  constructor() {
    super()
    this.token = [
      new Rule('isLength', '不允许为空', {
        min: 1
      })
    ]
  }
}

function checkArtType(vals) {
  let type = vals.body.type || vals.path.type
  if (!type) {
    return [false, 'type是必须参数']
  }
  type = parseInt(type)

  if (!ArtType.isThisType(type)) {
    return [false, 'type参数不合法']
  }
}

class LikeValidator extends PositiveIntegerValidator {
  constructor() {
    super()
    this.type = [
      new Rule('isInt', '需要是正整数', {
        min: 1
      }),
    ]
    this.validateType = checkArtType
  }
}

class ClassicValidator extends LikeValidator {

}

class MyFavorValidator extends LinValidator {
  constructor() {
    super()
    this.start = [
      new Rule('isOptional', '', 1),
      new Rule('isInt', '需要是正整数', {
        min: 1
      }),
    ]
    this.count = [
      new Rule('isOptional', '', 20),
      new Rule('isInt', '需要是正整数', {
        min: 1
      }),
    ]
  }
}

class SearchValidator extends LinValidator {
  constructor() {
    super()
    this.q = [
      new Rule('isLength', '搜索关键词不能为空', {
        min: 1,
        max: 16
      }),
      new Rule('isOptional', '')
    ]
    this.pageNum = [
      new Rule('isInt', '不符合规范', {
        min: 1,
        max: 60000
      }),
      new Rule('isOptional', '', 1)
    ]
    this.pageSize = [
      new Rule('isInt', '不符合规范', {
        min: 20,
        max: 30
      }),
      new Rule('isOptional', '', 20)
    ]
  }
}

class AddShortCommentValidator extends PositiveIntegerValidator {
  constructor() {
    super()
    this.content = [
      new Rule('isLength', '必须在1到12个字符之间', {
        min: 1,
        max: 12
      })
    ]
  }
}

module.exports = {
  PositiveIntegerValidator,
  RegisterValidator,
  TokenValidator,
  NotEmptyValidator,
  LikeValidator,
  ClassicValidator,
  SearchValidator,
  AddShortCommentValidator,
  MyFavorValidator,
  SmsLoginValidator,
  SendSmsValidator,
}