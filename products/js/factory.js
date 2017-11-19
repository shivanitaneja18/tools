app.factory("myfactory",($http,$q)=>{
            var object = {
            callserver : function(obj){
            var pr = $q.defer()
            var url = "https://api.halanx.com/products/"
            console.log(obj)
             
             
                var token=   localStorage.getItem('token');
            
            $http.post(url,obj,{

//withCredentials:true,
headers:{
     
    'Authorization':'Token '+token
}

} ).then(function(data){
                 
                pr.resolve(data.data)
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
            },  
                updateserver : function(obj,id){
            var pr = $q.defer()
            var url = "https://api.halanx.com/products/"+id;
            console.log(obj)
            $http.patch(url,obj).then(function(data){
                pr.resolve(data.data)
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
            },
                 callimage : function(obj,id){
            var pr = $q.defer()
            var url = "https://api.halanx.com/products/"+id+"/upload-image";
            console.log(obj)
             var token=   localStorage.getItem('token');
           $http.post(url,obj,{

//withCredentials:true,
headers:{
     
    'Authorization':'Token '+token
}

} ).then(function(data){
                pr.resolve(data.data)
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
            },
                      callimage1 : function(obj,id){
            var pr = $q.defer()
            var url = "https://api.halanx.com/products/"+id+"/upload-image";
            console.log(obj)
            $http.patch(url,obj).then(function(data){
                
                pr.resolve(data.data)
                alert("patch")
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
            },
                getproduct : function(){
                      var pr = $q.defer()
            var url = "https://api.halanx.com/products/";
            
            $http.get(url).then(function(data){
                pr.resolve(data.data)
                 
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
                    
                },
                getstore : function(id){
                               var pr = $q.defer()
            var url = "https://api.halanx.com/stores/"+id;
            
            $http.get(url).then(function(data){
                pr.resolve(data.data)
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
                },
                delete : function(id){
                                     var pr = $q.defer()
            var url = "https://api.halanx.com/products/"+id;
            
            $http.delete(url).then(function(data){
                pr.resolve(data.data)
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
            }
                
            }
            return object
            })
