/*
 * @Author: june.yang 1027612662@qq.com
 * @Date: 2023-08-07 11:41:18
 * @LastEditors: june.yang 1027612662@qq.com
 * @LastEditTime: 2023-08-07 16:11:44
 * @FilePath: /nextjs-blog/pages/posts/[id].js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Head from 'next/head'

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts.js";
import Date from '../../components/date'


import utilStyles from '../../styles/utils.module.css'



export default function Post({ content }) {
  return (
    <Layout>
      <Head>
        <title>
          {content.title}
        </title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{content.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={content.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const content = await getPostData(params.id)
  return {
    props: {
      content
    }
  }
}