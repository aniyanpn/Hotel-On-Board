function itemSelected() {
    var $item = $(this);
    $("#itemname").text($item.find('h6').text());
    $("#orgimg").attr("src", 'images/org/' + $item.data('orgimg'));
    $("#description").text($item.find('span.desc').text());
    $("#price").text($item.find('span.price').text());
    $("#thumbimg").val($item.find('img').attr('src'));
    $("#txtquantity").val('');
    $('#txtremarks').val('');
    return true;
}

function itemConfirm() {
    var $orderitem = $("#orderlist li.template").clone();
    $orderitem.find('div.item img').attr('src', $("#thumbimg").val());
    $orderitem.find('div.item h6').text($("#itemname").text());
    $orderitem.find('div.item span.desc').text($("#description").text());
    $orderitem.find('div.item span.remarks').text('Remarks : ' + $("#txtremarks").val());
    $orderitem.find('div.item span.quantity').text('Quantity : ' + $("#txtquantity").val());
    var amount = parseFloat($("#txtquantity").val()) * parseFloat($("#price").text().replace('Price : ', ''));
    $orderitem.find('div.item span.price').text('Amount : ' + amount);
    $orderitem.removeClass('template');
    $orderitem.addClass('newitem');
    $("#orderlist").append($orderitem);
    return true;
}

function resetForm() {
    $("#orderlist li.newitem").remove();
    return true;
}
