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

window.setTimeout(function (){

    editor = CodeMirror(document.body.getElementsByTagName("article")[0], {
        value: '',
        lineNumbers: true,
        mode: "javascript",
        keyMap: "sublime",
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "monokai",
        tabSize: 2
    });





    $('.submit').on('click', function (){
        $('textarea.code').val( editor.getValue() );
        $('.CodeMirror textarea').focus();

        //     $('form').submit();//die form mit id = form
    })

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
    $(".CodeMirror").trigger("click");
    $(".CodeMirror textarea").focus();


}, 2000);

