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

function sendFormData(onComplete, form = "#form") {
  var object = {};
  $.map($(form).serializeArray(), function(n, i){
    object[n['name']] = n['value'];
  });
  $.ajax({
    url: $(form).prop('action'),
    type : $(form).prop('method'),
    dataType : 'json',
    data : JSON.stringify(object),
    success: function (data) {
      $("#message").removeClass('alert-danger');
      $("#message").addClass('alert-success');
      $("#message").html('<strong>Success!</strong>');
    },
    error: function (data) {
      $("#message").removeClass('alert-success');
      $("#message").addClass('alert-danger');
      $("#message").html('<strong>Failed!</strong> ');

    },
    complete: function (data) {
      var jsonResponse = data.responseJSON;
      $("#message").css('display', '');
      if (jsonResponse.message) {
        $("#message").html($("#message").html() + '&nbsp;' + jsonResponse.message);
      }
      onComplete();
    }
  });
}

function setSubmitClick(onComplete, form = "#form", submit = "#submit") {
  $(document).ready(function(){
    $(form).submit(function(event){
      event.preventDefault();
      $(submit).prop("disabled",true);
      sendFormData(onComplete, form);
    });
    $(form + ' input').bind('input', function() {
      $(submit).prop('disabled', false);
    });
  });
}
