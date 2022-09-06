

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

        var chartT = new Highcharts.chart('container', {
            chart: {
              type: 'variablepie'
            },
            title: {
              text: 'STORE CAPACITY'
            },
            tooltip: {
              headerFormat: '',
              pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                'Total People : <b>{point.y}</b><br/>' 
            },
            series: [{
              minPointSize: 10,
              innerSize: '20%',
              zMin: 0,
              name: 'categories',
              data: [{
                name: 'Entered', 
                color:'#90ED7D' ,
                y:15 ,
                z:15 
              }, {
                name: 'Capacity', 
                color: '#E4D354', 
                y:3,
                z:3
              }, {
                name: 'Exited', 
                color : '#F15C80' ,
                y: 9,
                z: 9
              }]
            }]
          });
          