app.controller("myctrl",($scope, $window ,myfactory)=>{
   
    $scope.submitform = ()=>{
    
        var obj = {};
        
         
        obj.username= "c"+ $scope.mobilenumber;
        obj.password=$scope.password;
        
        console.log(obj)
       
          var promise = myfactory.callserver(obj);
          promise.then((data)=>{
                 
                console.log(data);

                if (data.key) {
                    
                     
                    $window.location.href = "https://halanx.com/tools/login1.html";

                }
            },(err)=>{
                
                alert("error");
            })
       
    }
})
