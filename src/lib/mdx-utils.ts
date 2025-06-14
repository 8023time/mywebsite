import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { MDXRemote, SerializeOptions } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkPrism from 'remark-prism';

// MD 博客存放目录
const BLOG_DIR = join(process.cwd(), 'content/blog');

// 提取所有博客的元数据（用于列表页）
export const getBlogPosts = () => {
  const files = readdirSync(BLOG_DIR);
  return files.map((filename) => {
    const filePath = join(BLOG_DIR, filename);
    const content = readFileSync(filePath, 'utf8');
    const { data, excerpt } = matter(content, {
      excerpt_separator: '<!-- more -->', // Hexo 风格的摘要分割符
    });

    return {
      ...data,
      slug: filename.replace(/\.(mdx|md)$/, ''), // 去掉后缀作为路由 Slug
      excerpt: excerpt || '', // 文章摘要（Frontmatter 或分割符前内容）
    };
  });
};

// 根据 Slug 获取单篇博客内容（用于详情页）
export const getBlogPostBySlug = async (slug: string) => {
  const filePath = join(BLOG_DIR, `${slug}.mdx`);
  const content = readFileSync(filePath, 'utf8');
  const { data, content: mdxContent } = matter(content);

  // 序列化 MDX 内容（支持 React 组件、代码高亮）
  const mdxSource = await serialize(mdxContent, {
    mdxOptions: {
      remarkPlugins: [remarkPrism], // 启用代码高亮
    },
  } as SerializeOptions);

  return {
    frontmatter: data,
    mdxSource,
  };
};