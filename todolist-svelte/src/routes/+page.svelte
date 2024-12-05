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
    <h1>Todoリスト</h1>
    <input type ="text" bind:value={task} placeholder="Taskname" />
    <input type="number" bind:value={num} min="1" max="5"/>
    <br>
    <button on:click={addtask}>作成</button>
</center>
<br>
{#if Tasks.length > 0}
    {#each Tasks as {task},i}
        <div class = "task-container">
            <div class = "task">
            <p>{task}</p>
                <button on:click={()=>deltask(i)}>完了</button>
            </div>
        </div>
    {/each}<!--checkboxの値変更で，その要素をdel-->
{/if}

<style>

    .task-container {
        display: flex;
        justify-content: center;
        padding: 2px;
    }

    .task{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding-left:30px;
        padding-right:30px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width:250px;
    }
</style>