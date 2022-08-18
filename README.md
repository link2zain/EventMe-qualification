# EventMe-qualification
This task included a task list. To complete the tasks we had to involve some way so we will achive multithreading purpose. I have used the workers approach to achive this. I have used a pool of workers which will be concurrently calling for child process along with the data and task that is to be performed. In child process we will be processing our task. In this way we will have multiple threads which will be recursively calling themsleves to itterate through the complete list of processes
## Installation


```bash
npm install
```

### Usage
```bash
node index.js
```
