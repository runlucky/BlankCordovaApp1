define(["require", "exports"], function (require, exports) {
    // 空白のテンプレートの概要については、次のドキュメントを参照してください:
    // http://go.microsoft.com/fwlink/?LinkID=397705
    //cordova-simulate または Android デバイス/エミュレーター上のページ読み込みでコードをデバッグするには、アプリを起動して、ブレークポイントを設定し、
    // 次に、JavaScript コンソールで "window.location.reload()" を実行します。
    "use strict";
    function initialize() {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
    exports.initialize = initialize;
    function onDeviceReady() {
        document.addEventListener('pause', onPause, false);
        document.addEventListener('resume', onResume, false);
        // TODO: Cordova が読み込まれました。ここで、Cordova を必要とする初期化を実行します。
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        var cam = new Camera2();
        cam.start();
        // hoge
        $('.camera').on('click', function () {
            cam.start();
        });
    }
    function onPause() {
        // TODO: このアプリケーションは中断されました。ここで、アプリケーションの状態を保存します。
    }
    function onResume() {
        // TODO: このアプリケーションが再アクティブ化されました。ここで、アプリケーションの状態を復元します。
    }
    var Camera2 = (function () {
        function Camera2() {
        }
        Camera2.prototype.start = function () {
            if (!navigator.camera) {
                alert('カメラがない');
            }
            // カメラ起動時のオプション
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: 1,
                encodingType: 0 // 0=JPG 1=PNG
            };
            // カメラを起動
            navigator.camera.getPicture(function (imgData) {
                $('#image').attr('src', "data:image/jpeg;base64," + imgData);
            }, function () {
                alert('Error taking picture, Error');
            }, options);
        };
        return Camera2;
    }());
});
//# sourceMappingURL=application.js.map