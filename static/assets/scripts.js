function getData(address, onSuccess) {
  $.ajax({
    type: 'GET',
    url: address,
    dataType: 'json',
    success: function (data) {
      onSuccess(data);
    }
  });
}

function sendFormData(onComplete) {
  $("#submit").prop("disabled",true);
  $.ajax({
    url: $("#form").prop('action'),
    type : $("#form").prop('method'),
    dataType : 'json',
    data : $("#form").serialize(),
    complete: function () {
      onComplete();
    }
  });
}

function setSubmitClick(onComplete){
  $(document).ready(function(){
    $("#form").submit(function(event){
      event.preventDefault();
      sendFormData(onComplete);
    });
    $('input').on('change', function() {
      $("#submit").prop('disabled', false);
    });
  });
}
