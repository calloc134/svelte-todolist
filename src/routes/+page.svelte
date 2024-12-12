<script>
    export let Tasks = [];
    export let task = '';
    export let num=1;

    function addtask(){
        if(task == ''){
            alert("タスク名を入れてね");
        }else{
            Tasks.push({num,task});
            Tasks = mergesort(Tasks);
            task = '';
        }
    }

    /**
     * @param {Array} array
     * @returns {Array}
     */
    export function mergesort(array){
        if(array.length <= 1){
            return array;
        }
        const mid = Math.floor(array.length/2);
        const left = mergesort(array.slice(0,mid));
        const right = mergesort(array.slice(mid));

        return merge(left,right);
    }

    /**
     *@param {Array} left 
     *@param {Array} right
     *@returns {Array}
    */
    export function merge(left,right){
        const res = [];
        let i = 0;
        let j = 0;
        while(i < left.length && j < right.length){
            if(left[i].num >= right[j].num){
                res.push(left[i]);
                i++;
            }else{
                res.push(right[j]);
                j++;
            }
        }
        return res.concat(left.slice(i)).concat(right.slice(j));
    }

    /**
	 * @param {number} index
	 */
    function deltask(index){
        Tasks = Tasks.filter((_, i) => i !== index);
    }
</script>

<center>
    <div class  = "all-container">
        <center>
            <h1>Todoリスト</h1>
            <input type ="text" bind:value={task} placeholder="Taskname" />
            <input type="number" bind:value={num} min="1" max="5"/>
            <button on:click={addtask}>作成</button>
        </center>
    </div>
        <br>
        {#if Tasks.length > 0}
            {#each Tasks as {task,num},i}
                {#if num == 1}
                    <div class = "task-container">
                        <div class = "task1">
                        <p>{task}</p>
                            <button on:click={()=>deltask(i)}>完了</button>
                        </div>
                    </div>
                {:else if num == 2}
                    <div class = "task-container">
                        <div class = "task2">
                        <p>{task}</p>
                            <button on:click={()=>deltask(i)}>完了</button>
                        </div>
                    </div>
                {:else if num == 3}
                    <div class = "task-container">
                        <div class = "task3">
                        <p>{task}</p>
                            <button on:click={()=>deltask(i)}>完了</button>
                        </div>
                    </div>
                {:else if num == 4}
                    <div class = "task-container">
                        <div class = "task4">
                        <p>{task}</p>
                            <button on:click={()=>deltask(i)}>完了</button>
                        </div>
                    </div>
                {:else}
                    <div class = "task-container">
                        <div class = "task5">
                        <p>{task}</p>
                            <button on:click={()=>deltask(i)}>完了</button>
                        </div>
                    </div>
                {/if}
            {/each}<!--checkboxの値変更で，その要素をdel-->
        {/if}
</center>
<style>
    .all-container{
        background-color: #ffffff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width: 600px;
        align-items: center;
        justify-content:center;
        padding-bottom: 30px;
        padding-top:10px;
    }
    .task-container {
        display: flex;
        justify-content: center;
        padding: 5px;
    }

    .task1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #1ce064;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding-left:30px;
        padding-right:30px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width:250px;
    }
    .task2{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #81c422;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding-left:30px;
        padding-right:30px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width:250px;
    }
    .task3{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #e7e745;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding-left:30px;
        padding-right:30px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width:250px;
    }
    .task4{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #e08d4a;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding-left:30px;
        padding-right:30px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width:250px;
    }
    .task5{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #cb4848;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding-left:30px;
        padding-right:30px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width:250px;
    }
</style>