/**
 * 开发版本的文件导入
 */
(function (){
    var paths  = [
            'editor.js',
            'core/browser.js',
            'core/utils.js',
            'ui/widget.js',
            'ui/jq.extend.js',
            'ui/popup.js',
            'ui/button.js',
            'ui/dropmenu.js',
            'ui/splitbutton.js',
            'ui/dropbutton.js',

            'ui/colorpicker.js'
        ],
        baseURL = '../_src/';
    for (var i=0,pi;pi = paths[i++];) {
        document.write('<script type="text/javascript" src="'+ baseURL + pi +'"></script>');
    }
})();
