jQuery(document).ready(function(){
  
    jQuery(".btn-add").click(function(){
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
                }
            });
            var name = jQuery(".name").val();
            var email = jQuery(".email").val();
            var message = jQuery(".message").val();

            $.ajax({
                url:"/store",
                type:"post",
                dataType:"json",
                data:{
                    name :name,
                    email :email,
                    message :message,
    
                },
                success:function(response){

                    // jQuery(".msg").show().text("Message Sent Successfully");
                    // jQuery(".msg").fadeOut(1000);

                    // jQuery(".name").text("");
                    // jQuery(".email").text("");
                    // jQuery(".message").text("");
                    
                    console.log(response);
                    
                },

                
                
            })

        })
    })