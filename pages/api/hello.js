/*
 * @Author: june.yang 1027612662@qq.com
 * @Date: 2023-08-07 17:00:34
 * @LastEditors: june.yang 1027612662@qq.com
 * @LastEditTime: 2023-08-07 17:00:46
 * @FilePath: /nextjs-blog/pages/api/hello.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
}