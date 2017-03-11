import * as Application from './application';

declare var require: (modules: string[], ready: Function, errback: Function) => void;

// /merges フォルダーからプラットフォーム固有のコードを読み込んでみてください。
// 詳しくは http://taco.visualstudio.com/ja-jp/docs/configure-app/#Content をご覧ください。
require(["./platformOverrides"],
    () => Application.initialize(),
    () => Application.initialize());