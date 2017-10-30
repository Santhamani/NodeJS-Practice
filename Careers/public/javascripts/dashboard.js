$(function() {
  $.getJSON('api', updateJob);

  $('.dashborad-form').submit(function(e){
      e.preventDefault();
      $.post('api',{
          job_title: $('#job_title').val(),
          role: $('#role').val(),
          location: $('#location').val(),
          job_title: $('#job_title').val(),
          experience: $('#experience').val(),
          salary: $('#salary').val(),
          job_type: $('#job_type').val(),
          skills: $('#skills').val(),
          job_description: $('#job_description').val(),
          
      }, updateJob);
  });

  function updateJob(data) {
   var output = '';
   $.each(data,function(key, item) {
     output += '     <div class="feedback-item item-list media-list">';
     output += '       <div class="feedback-item media">';
     output += '            <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
     output += '         <div class="feedback-info media-body">';
     output += '           <div class="feedback-head">';
     output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info"> ' + item.name + '</small></div>';
     output += '           </div>'; 
     output += '           <div class="feedback-message"><br>' + item.job_title+'<br>' + '<br>'+ item.role+'<br>' + '<br>'+ item.location+'<br>' + '<br>'+ item.experience+'<br>' + '<br>'+ item.salary+'<br>' +  '<br>'+ item.job_type+'<br>' + '<br>'+ item.skills+'<br>'  + item.job_description + '</div>';
     output += '         </div>';
     output += '       </div>';
     output += '     </div>';
   });
   $('.feedback-messages').html(output);
  }

});
