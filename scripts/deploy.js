const ghpages = require('gh-pages');

ghpages.publish('out', {
  repo: 'git@github.com:tzynwang/nextjs-blog-test.git'
});
