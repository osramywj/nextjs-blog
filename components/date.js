/*
 * @Author: june.yang 1027612662@qq.com
 * @Date: 2023-08-07 15:40:27
 * @LastEditors: june.yang 1027612662@qq.com
 * @LastEditTime: 2023-08-07 16:40:36
 * @FilePath: /nextjs-blog/components/date.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}