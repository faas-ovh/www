/*
var value = "// The bindings defined specifically in the Sublime Text mode\nvar bindings = {\n";
var map = CodeMirror.keyMap.sublime;
for (var key in map) {
    var val = map[key];
    if (key != "fallthrough" && val != "..." && (!/find/.test(val) || /findUnder/.test(val)))
        value += "  \"" + key + "\": \"" + val + "\",\n";
}
value += "}\n\n// The implementation of joinLines\n";
value += CodeMirror.commands.joinLines.toString().replace(/^function\s*\(/, "function joinLines(").replace(/\n  /g, "\n") + "\n";
*/
var editor = {};
//
window.setInterval(function () {


    // $('textarea.code').on('keydown', function () {
    var html = $('textarea.code').val();

    var el = new DOMParser().parseFromString(html, "text/html");
    // var links = doc.querySelectorAll("a");


    // local path in url script/style
    // var el = document.createElement('html');
    // el.innerHTML = html;

    var json = "jloadsUrl({\n";
    json += "   \"head\": [\n";

    var obj = el.querySelectorAll('script');
    each(obj, function (a) {
        console.log(a.src);
        json += '      "';
        json += a.src;
        json += '",';
        json += "\n";

    });

    var obj = el.querySelectorAll('link');
    each(obj, function (a) {
        console.log(a.href);
        json += '      "';
        json += a.href;
        json += '",';
        json += "\n";

    });

    json += "]});";


    $('textarea.jloads_config').val(json);
    // $('textarea.jloads_config').focus();
    // });

}, 700);


// $('.CodeMirror').click();
// $('article').trigger("click");
// $('.CodeMirror').trigger("click");
/*
$( document ).ready(function() {

    console.log( "ready!" );
    // $('#environment').trigger("click");
    // $('article').focus();
    // $("article").trigger("click");
    $(".CodeMirror").trigger("click");
    $(".CodeMirror textarea").focus();
    // $('.CodeMirror textarea').trigger("click");
});
*/
// $(".CodeMirror").trigger("click");
// $(".CodeMirror textarea").focus();
