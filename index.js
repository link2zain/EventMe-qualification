var workerFarm = require('worker-farm');
workers = workerFarm(require.resolve('./child'))

async function init() {
    // fixed inputs
    const numberOfTasks = 20;
    const concurrencyMax = 4;
    
    // generate a task list
    const taskList = [...Array(numberOfTasks)].map(() =>
    [...Array(~~(Math.random() * 10 + 3))].map(() =>
    String.fromCharCode(Math.random() * (123 - 97) + 97)
    ).join('') )

    // variable counters
    finished = 0;
    counter = 0;
    concurrencyCurrent = 1
    finished = 0

    console.log("[init] Concurrency Algo Testing...")
    console.log("[init] Tasks to process: ", taskList.length)
    console.log("[init] Task list: " + taskList)

    data = {
        "tasksCount": taskList.length,
        "concurrencyMax": concurrencyMax
    }
    // A loop to initialize the concurrencyMax number of concurrent workers
    for(var concurrencyCurrent = 1; concurrencyCurrent <= concurrencyMax; concurrencyCurrent++){
        manageConcurrency(concurrencyCurrent)
    }


    function manageConcurrency(current){
        data["current"] = current
        data["counter"] = counter

        // initialte a worker and send data to child process for the processing
        workers(taskList[counter],data,function(err,opt){
            // when one task is finished 
            if(counter <= data.tasksCount){
                manageConcurrency(current)
            }
            // when all tasks are finished stop the process.
            if(++finished == data.tasksCount){
                console.log("All tasks are finished")
                workerFarm.end(workers)
            }
        })
        counter++
    }
    
}
init()
