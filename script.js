$(document).ready(function() {
                  
var fireBaseHead = firebase.database().ref();

fireBaseHead.on("child_added", snap => {
  
  var recipe = snap.child('recipe').val();
  var group = snap.child("group").val();
  var ingredients = snap.child("ingredients").val();
  var method = snap.child("method").val();
  var url = snap.child("url").val();
  var short = snap.child("short").val();
  
  
  

   $("#test").append(
     
       '<div class="col-md-4">' +
              '<div class="card mb-4 box-shadow" >' +
                '<img class="card-img-top" src="'+url+'" alt="Card image cap">'+
                '<div class="card-body">'+
                 ' <p class="card-text"><h6>'+ recipe + '</h6></p>'+
                 ' <div class="d-flex justify-content-between align-items-center">'+
                    '<div class="btn-group">'+
                     ' <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#'+short+'" data-whatever="'+recipe+'">View</button>'+
                       '<h1>'+
              '<table id="test">'+
                
          '</table>'+
          '</h1>'+
                    '</div>'+
                    '<small class="text-muted">'+group+'</small>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>' +
     
    
'<div class="modal fade" id="'+short+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">'+
  '<div class="modal-dialog" role="document">'+
    '<div class="modal-content">'+
     ' <div class="modal-header">'+
      '  <h5 class="modal-title" id="exampleModalLongTitle">' + recipe + '</h5>'+
       ' <button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
        '  <span aria-hidden="true">&times;</span>'+
       ' </button>'+
     ' </div>'+
     ' <div class="modal-body">'+
     '<img src=" ' +url+ ' " class="img-fluid" alt="Responsive image">' +
     '</br>' +
     '<h3> Ingredients </h3>' +
     '  <p> '+
     ingredients +
     '</p>'+
     '<h3> Method </h3>' +
     '  <p> '+
     method +
     '</p>'+
     ' </div>'+
     ' <div class="modal-footer">'+
     '   <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
     ' </div>'+
   ' </div>'+
 ' </div>'+
'</div>'
       
     
      );
  
  
  
});

 
  
    });
