

function Node(pos, path){
    if(
        pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7
    ) {
        return null
    }
    return {pos, path}
}

function knightMoves([x,y], [a,b]){

    let queue = [Node([x,y], [[x,y]])]
    let currentNode = queue.shift();
    
   
    while(currentNode.pos[0] !== a || currentNode.pos[1] !== b) {
        let possibleMoves = [
            [currentNode.pos[0] + 2, currentNode.pos [1] + 1],
            [currentNode.pos[0] + 2, currentNode.pos [1] - 1],
            [currentNode.pos[0] - 2, currentNode.pos [1] + 1],
            [currentNode.pos[0] - 2, currentNode.pos [1] - 1],
            [currentNode.pos[0] + 1, currentNode.pos [1] + 2],
            [currentNode.pos[0] + 1, currentNode.pos [1] - 2],
            [currentNode.pos[0] - 1, currentNode.pos [1] + 2],
            [currentNode.pos[0] - 1, currentNode.pos [1] - 2]  
        ]
    
        possibleMoves.forEach((jump)=>{
            let node = Node(jump, currentNode.path.concat([jump]))
            if(node){
                queue.push(node)
            }
        })
        currentNode = queue.shift();
    }
  
    console.log("You did it in " + (currentNode.path.length-1) + " moves!")
    for(let i = 0 ; i < currentNode.path.length ; i++) {
        console.log(currentNode.path[i])
    }
    return currentNode
}
knightMoves([1,3], [5,5])
knightMoves([3,3], [4,3])
knightMoves([1,7], [3,4])

