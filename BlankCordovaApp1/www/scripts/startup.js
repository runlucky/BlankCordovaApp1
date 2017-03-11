define(["require", "exports", "./application"], function (require, exports, Application) {
    "use strict";
    // /merges フォルダーからプラットフォーム固有のコードを読み込んでみてください。
    // 詳しくは http://taco.visualstudio.com/ja-jp/docs/configure-app/#Content をご覧ください。
    require(["./platformOverrides"], function () { return Application.initialize(); }, function () { return Application.initialize(); });
});
//# sourceMappingURL=startup.js.map