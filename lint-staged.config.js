function joinFiles(files) {
  return files.join(' ');
}

function lint(files) {
  return [
    //--allow-empty-input 는 stylelint 에서 린트대상인 파일이 없더라도 오류를 발생시키지 않음
    `stylelint --allow-empty-input ${joinFiles(files)} --fix`,
    `eslint ${joinFiles(files)} --fix`,
    `prettier --write ${joinFiles(files)}`,
  ];
}

export default {
  '*.{js,jsx}': (stagedFiles) => lint(stagedFiles),
};
