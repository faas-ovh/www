/**
 *
 * @param text
 * @constructor
 */
function AddMessage(text) {
    var message = new Message('#messages');
    message.add(text);
}

var response = function (xhr) {
    console.log("xhr", xhr);
    // console.log("b", b);
    // console.log("c", c);
    // alert("OK RESPONSE");
    AddMessage(xhr.status);
    AddMessage(xhr.statusText);
    AddMessage(xhr.response);
}

var success = function (data) {
    // console.log('FORM success', data);
    console.table('FORM success', data);

    // var Check = prompt('Geben Sie Ihr Passwort für diese Seite ein', '@');
    // if (Check != '@') {
    //     alert('Du kommst hier nicht rein!');
    // } else {
    //     alert('Sie haben Zutritt');
    // }

};
var error = function (data) {
    console.error('!FORM', data);
}


var form = new RestForm('form', response, error, success);

form.cfg({
    "target": "form",
    "url": "//php.jloads.com/index.php",
    "method": "GET",
    "event": "submit"
});

// form.url((window.location.hostname === 'localhost') ? "//localhost:8000/index.php" : "//php.jloads.com/index.php");

form.submit();


$(".add_input").hide();
$(".add_list").show();

$(".del_button").on("click", function () {
    delItemSelect(this);
});

$(".add_button").on("click", function () {
    addItemSelect(this);
});

$(".add_button").on('keyup', function (e) {
    if (e.keyCode === 13) {
        // Do something
        addItemSelect(this);
    }
});

function addItemSelect(that) {
    var list = $(that).parent().find('select');
    var list1 = list[0];
    var list_val = $(list).val();

    console.log('>list', list, list_val);

    var input = $(that).parent().find('input');
    var input1 = input[0];
    var input_val = $(input).val();

    console.log('>input', input, input_val);

    if (input_val.length) {
        console.log('>add to list', input_val);
        // innerHTML
        // var item = $('<option value="' + input_val + '">' + input_val + '</option>');
        var item = $('<option>').val(input_val).text(input_val);
        list.prepend(item);
        // list.append(item);

        input.val("");
        input.hide();
        list.show();
        list.prop("selectedIndex", 0);
        list.focus();
    } else {
        // $(".add_input").show();
        input.show();
        // $(".add_list").hide();
        list.hide();
        input.focus();
    }
}

function delItemSelect(that) {
    var list = $(that).parent().find('select option:selected');
    // var list1 = list[0];
    // var list_val = $(list).val();
    list.remove();
}
