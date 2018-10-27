      
      cadastrar = function(form){
      $.post( "http://localhost:3000/Usuario/", form.serialize() ).done(function(data){
          if (!data.erro) {
              form.each(function(data)
              {
                
              });
          }
      });
  };   
