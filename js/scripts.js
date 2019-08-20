function reload(){
  $(".field").val(0);
  $(".userResult").hide();
};

$(document).ready(function(){
  $("#stressSurvey").submit(function(event){
    event.preventDefault();

    var coping = 0;
    var stress = 0;
    $("input:checkbox[name=stress]:checked").each(function(){
      stress++;
    });
    $("input:checkbox[name=coping]:checked").each(function(){
      coping++;
    });
    if(stress===coping) {
      $("#neutral").show();
    } else if(coping > stress) {
      //check highest amount first
        $("#cope").show();
    } else if(coping < stress) {
        $("#die").show();
    };
        });
});
