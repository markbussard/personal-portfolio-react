const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

module.exports = {
  appBuild: resolveApp('build'),
  appHTML: resolveApp('public/index.html'),
  appIndex: resolveApp('src/index.js'),
  assets: resolveApp('src/assets/'),
  components: resolveApp('src/components/'),
  pages: resolveApp('src/pages/'),
  layouts: resolveApp('src/layouts/'),
  styles: resolveApp('src/styles/'),
};
