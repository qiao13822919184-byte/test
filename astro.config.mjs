// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 1. 你的 GitHub Pages 完整域名
  site: 'https://qiao13822919184-byte.github.io',
  
  // 2. 你的仓库名称（必须以斜杠开头！）
  // 这样 Astro 才会把所有的链接自动加上 /test 前缀
  base: '/test',

  // 3. 强制在 URL 结尾加斜杠，解决 GitHub Pages 的重定向问题
  trailingSlash: 'always',

  // 4. 让生成的资源路径更加智能
  build: {
    assets: '_assets'
  }
});
