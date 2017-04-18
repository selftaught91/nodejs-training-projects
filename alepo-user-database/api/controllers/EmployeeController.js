module.exports={

    addEmployee : function(req,res){
        console.log("Body",JSON.stringify(req.body));

        Employee
            .create(req.body)
            .then(function(data){
                res.status(200);
                res.json(data);
            })
            .catch(function(err){
                res.status(500);
                res.json(err);
            });

    },
    getEmployee : function(req,res){

        console.log("Getting all employee");

        Employee
            .find({})
            .then(function(data){

                res.status(200);
                res.json(data);
            })
            .catch(function(err){

                res.status(500);
                res.json(err);
            });

    },
    getEmployeeByID : function(req,res){
        var employeeId = req.params.employeeId;

        console.log("Getting employee by id ",employeeId);

        Employee
            .find({id : employeeId})
            .then(function(data){

                res.status(200);
                res.json(data);
            })
            .catch(function(err){

                res.status(500);
                res.json(err);
            });

    }

};
