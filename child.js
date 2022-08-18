module.exports = async function(inp,data, callback){
    // recive data from parent
    console.log("[EXE] Concurrency "+data.current+" of "+ data.concurrencyMax)
    console.log("[EXE] Task count "+data.counter+" of "+ data.tasksCount)
    if(inp !== null)
        await doTask(inp)
    // send back acknowledgement that task has been completed
    callback()
}

// do task
async function doTask(taskName){
    var begin=Date.now();
    console.log('\x1b[31m%s\x1b[0m', "[TASK] STARTING: " + taskName );
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            var end= Date.now();
            var timeSpent=(end-begin)+ "ms";
            console.log('\x1b[36m', "[TASK] FINISHED: " + taskName + " in " +
            timeSpent ,'\x1b[0m');
            
            
            resolve(true);
        },(Math.random()*2000));
    });
}