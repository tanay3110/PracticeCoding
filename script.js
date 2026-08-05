function savetodb(data , success , failure){
    let is = Math.floor(Math.random() * 10);
    if(is > 5){
        success();
    }
    else{
        failure();}
}

savetodb(
    "tanay",
    ()=>{
        console.log("data saved successfully");
        savetodb(
            "kasturee ",
            ()=>{
                console.log("data2 saved successfully");
                savetodb(
                    "ovi",
                    ()=>{
                        console.log("data3 saved successfully");
                    },
                    ()=>{
                        console.log("data3 not saved successfully");
                    }
                )
            },
            ()=>{
                console.log("data2 not saved successfully");
            }
        );
    },
    ()=>{
        console.log("data not saved successfully");
    }
)