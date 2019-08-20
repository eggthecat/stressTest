function reload(){
  $(".field").val(0);
  $(".userResult").hide();
};

$(document).ready(function(){
  $("#stressSurvey").submit(function(event){
    event.preventDefault();

    var coping = parseInt($('.coping').val());
    var symptom = parseInt($('.symptom').val());
    console.log(coping);
    console.log(symptom);
    var score = symptom + coping
    console.log(score);
    $("#responses").show();
    $("input:checkbox[name=symptom]:checked").each(function(){
      console.log(symptom);
      var stressResponse = $(this).val();

    //   console.log(stressResponse);
  })
})
});

// part 2

$(document).ready(function(){
  $("form#fortune").submit(function(event){
    event.preventDefault();
    $(".hidden").hide();
    var goodLuck = 0;
    var badLuck = 0;
    $("input:checkbox[name=badVibes]:checked").each(function(){

      badLuck++;
    });

    $("input:checkbox[name=goodVibes]:checked").each(function(){
      goodLuck++;

    })
      if(badLuck === goodLuck) {
        $("#neutral").show();
      } else if(badLuck >= goodLuck + 2) {
        //check highest amount first
          $("#badResponses2").show();
      } else if(goodLuck >= badLuck +2) {
          $("#goodResponses2").show();
      } else if (badLuck > goodLuck) {
          $("#badResponses1").show();
      } else if (goodLuck > badLuck) {
          $("#goodResponses1").show();
      }


  });
});
