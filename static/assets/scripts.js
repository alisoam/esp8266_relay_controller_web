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
  var object = {};
  $.map($("#form").serializeArray(), function(n, i){
    object[n['name']] = n['value'];
  });
  $.ajax({
    url: $("#form").prop('action'),
    type : $("#form").prop('method'),
    dataType : 'json',
    contentType: 'application/json',
    data : JSON.stringify(object),
    success: function (data) {
      $("#message").removeClass('alert-danger');
      $("#message").addClass('alert-success');
      $("#message").html('<strong>Success!</strong>');

    },
    error: function (data) {
      $("#message").removeClass('alert-success');
      $("#message").addClass('alert-danger');
      if (data.hasOwnProperty["message"]) {
        $("#message").html('<strong>Failed!</strong>' + data["message"]);
      }
      else {
        $("#message").html('<strong>Failed!</strong>');
      }
    },
    complete: function () {
      $("#message").css('display', '');
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
    $('input').bind('input', function() {
      $("#submit").prop('disabled', false);
    });
  });
}
