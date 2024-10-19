// 向外共享Token字符串所需要的参数配置。
module.exports = {
    // 设置加密和解密Token字符串的密钥。
    jwtSecretKey: 'Hello Word',
    // 设置Token字符串的有效期。
    expiresIn: '10h'
}