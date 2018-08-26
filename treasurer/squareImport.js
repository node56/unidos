var fixCats = function(mutationList) {
  $("[id^=cat_]").each(function (i) {
    var text = $(this).children(":selected").text();
    if (text == "Square Fees") {
      $(this).children('option').filter(function(i, e) { return $(e).text() == "Merchant Account Charges"}).prop('selected', true)
    } else if (text == "" && (
        $(this).parent().parent().find("td:contains('NO ITEMS WILL BE SHIPPED')").length > 0
          || $(this).parent().parent().find("input[id^=Details]").val().search("Shirt") > -1
          || $(this).parent().parent().find("input[id^=Details]").val().search("Sport") > -1
        )) {
      $(this).children('option').filter(function(i, e) { return $(e).text() == "Spirit Wear"}).prop('selected', true)
    }
  });
};

fixCats([]);
setTimeout(fixCats, 500);

//var observer = new MutationObserver(fixCats);
//observer.observe($("#SubmitSave")[0], {attributes: true, childList: true, subtree: true}); });

