

        function tabs(tb)
        { 
          if(tb == "tb2")
          {
            var a = readCookie("QRCODE");

            $(".tbs").css("display" , "none");

            if(a == null)
            {
              load();
              $("#" + tb).css("display" , "block");
            }
            else
            {
               $("#tb1").css("display" , "block");
            }
          }
          else{
            $(".tbs").css("display" , "none");
            $("#" + tb).css("display" , "block");
          }

        }

        
        function createCookie(name, value, days) 
        {
          localStorage.setItem(name, value); 
       }

       function readCookie(name) 
       {
        return localStorage.getItem(name);
       }

