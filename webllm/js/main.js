// 命名要选择一个有意义的词来描述它的功能，比如 endpoint、headers、payload 等
// webLLM 基于web，web的底层是http协议
// LLM API 服务
// api.deepseek.com 二级域名 LLM 服务以API的方式提供
// https 是加密的http，更安全
// /chat 表示以聊天的方式提供服务
const deepseek_url = "https://api.deepseek.com/chat/completions"
// 请求头
const headers = {
  // 内容类型
  'Content-Type': 'application/json',
  // 授权
  Authorization: `Bearer sk-41d9a4f08144439c8f3ff22cd58ce16b`
}
// 请求体
const payload = {
  model: 'deepseek-chat',
  messages: [
    // chat 三种方式
    // 1.系统角色 只会出现一次 设置系统的角色 开始会话时 
    // 2.用户角色 user 提问
    // 3.助手角色
    { role: 'system', content: 'You are a helpful assistant.'},
    { role:'user', content: '你好 Deepseek'}
  ]
}

fetch(endpoint, {
  method: 'POST',
  headers: headers,
  // http 请求传输只能是字符串，二进制流，所以要把JSON对象转换成字符串
  body: JSON.stringify(payload)
}).then(res => res.json())
.then(data => {
  console.log(data);
  document.querySelector('#reply').innerHTML 
    = data.choices[0].message.content
})