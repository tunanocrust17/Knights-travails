

function Node(pos, path){
    if(
        pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7
    ) {
        return
    }
    return {pos, path}
}

function knightMoves([x,y], [a,b]){

    let queue = [Node([x,y], [[x,y]])]
    let currentNode = queue.shift();
    return currentNode
}
console.log(knightMoves([3,4], [7,7]))
