const fs = require('fs');
const data = require('./miniprogram/utils/data.js');

const css = 
  ':root {' +
  '  --bg: #f6faf6;' +
  '  --panel: #ffffff;' +
  '  --text: #1e2a22;' +
  '  --muted: #6a786f;' +
  '  --line: #dbe8dd;' +
  '  --soft: #edf6ef;' +
  '  --accent: #6c8d71;' +
  '  --accent-strong: #4d6a53;' +
  '  --shadow: 0 16px 40px rgba(47, 73, 55, 0.08);' +
  '  --radius: 22px;' +
  '}' +
  'body {' +
  '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;' +
  '  background: var(--bg);' +
  '  color: var(--text);' +
  '  margin: 0;' +
  '  padding: 40px;' +
  '}' +
  '.shell {' +
  '  max-width: 800px;' +
  '  margin: 0 auto;' +
  '  display: flex;' +
  '  flex-direction: column;' +
  '  gap: 40px;' +
  '}' +
  '.type-section {' +
  '  background: var(--panel);' +
  '  border: 1px solid var(--line);' +
  '  border-radius: var(--radius);' +
  '  box-shadow: var(--shadow);' +
  '  padding: 30px;' +
  '  display: flex;' +
  '  flex-direction: column;' +
  '  gap: 20px;' +
  '}' +
  '.result-top {' +
  '  display: grid;' +
  '  grid-template-columns: 1fr 1fr;' +
  '  gap: 20px;' +
  '  align-items: stretch;' +
  '}' +
  '.poster-box,' +
  '.type-box,' +
  '.analysis-box {' +
  '  border: 1px solid var(--line);' +
  '  border-radius: 18px;' +
  '  padding: 24px;' +
  '  background: linear-gradient(180deg, #ffffff, #fbfdfb);' +
  '}' +
  '.poster-box {' +
  '  display: flex;' +
  '  flex-direction: column;' +
  '  align-items: center;' +
  '  justify-content: center;' +
  '  position: relative;' +
  '  background: radial-gradient(circle at top right, rgba(127, 165, 134, 0.16), rgba(127, 165, 134, 0) 40%), linear-gradient(180deg, #ffffff, #f7fbf8);' +
  '}' +
  '.poster-image {' +
  '  width: 100%;' +
  '  max-height: 280px;' +
  '  object-fit: contain;' +
  '  border-radius: 18px;' +
  '}' +
  '.no-image .poster-image { display: none; }' +
  '.poster-caption {' +
  '  margin-top: 14px;' +
  '  color: var(--muted);' +
  '  font-size: 14px;' +
  '  text-align: center;' +
  '}' +
  '.type-kicker {' +
  '  font-size: 13px;' +
  '  color: var(--accent-strong);' +
  '  margin-bottom: 8px;' +
  '  letter-spacing: .05em;' +
  '}' +
  '.type-name {' +
  '  font-size: 32px;' +
  '  font-weight: bold;' +
  '  letter-spacing: -0.03em;' +
  '  margin: 10px 0;' +
  '}' +
  '.type-subname {' +
  '  color: var(--muted);' +
  '  font-size: 15px;' +
  '  margin-top: 8px;' +
  '}' +
  '.match {' +
  '  display: inline-flex;' +
  '  align-items: center;' +
  '  border-radius: 999px;' +
  '  padding: 8px 14px;' +
  '  background: var(--soft);' +
  '  border: 1px solid var(--line);' +
  '  color: var(--accent-strong);' +
  '  font-weight: 700;' +
  '  font-size: 14px;' +
  '  margin-top: 16px;' +
  '}' +
  '.analysis-box h3 {' +
  '  font-size: 16px;' +
  '  margin-top: 0;' +
  '  margin-bottom: 12px;' +
  '}' +
  '.analysis-box p {' +
  '  margin: 0;' +
  '  color: #304034;' +
  '  font-size: 15px;' +
  '  line-height: 1.8;' +
  '}' +
  '@media (max-width: 600px) {' +
  '  .result-top {' +
  '    grid-template-columns: 1fr;' +
  '  }' +
  '}';

const types = Object.values(data.TYPE_LIBRARY);
const images = data.TYPE_IMAGES;

let htmlContent = '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n  <meta charset="UTF-8">\n  <title>SBTI 全人格解析档案</title>\n  <style>\n' + css + '\n  </style>\n</head>\n<body>\n  <div class="shell">\n    <h1 style="text-align:center;">SBTI 全人格类型档案库</h1>\n    <p style="text-align:center; color:#6a786f;">共 ' + types.length + ' 种人格类型</p>\n';

types.forEach(type => {
  const imgSrc = images[type.code] ? images[type.code].replace('/images/', './image/') : '';
  const imgHtml = imgSrc ? '<img class="poster-image" src="' + imgSrc + '" />' : '';

  htmlContent += 
    '<div class="type-section" id="' + type.code + '">' +
    '  <div class="result-top">' +
    '    <div class="poster-box ' + (!imgSrc ? 'no-image' : '') + '">' +
    '      ' + imgHtml +
    '      <div class="poster-caption">' + type.intro + '</div>' +
    '    </div>' +
    '    <div class="type-box">' +
    '      <div class="type-kicker">主类型档案</div>' +
    '      <div class="type-name">' + type.code + '（' + type.cn + '）</div>' +
    '      <div class="match">匹配度 100% · 标准收录</div>' +
    '      <div class="type-subname">维度命中度较高，当前结果可视为该人格的标准画像。</div>' +
    '    </div>' +
    '  </div>' +
    '  <div class="analysis-box">' +
    '    <h3>该人格的简单解读</h3>' +
    '    <p>' + type.desc + '</p>' +
    '  </div>' +
    '</div>\n';
});

htmlContent += '  </div>\n</body>\n</html>';

fs.writeFileSync('all_results.html', htmlContent, 'utf-8');
console.log('Successfully generated all_results.html');
