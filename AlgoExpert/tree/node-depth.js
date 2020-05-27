function nodesDepth(root, sum = 0) {
  if (root) {
    let left = nodesDepth(root.left, sum + 1);
    let right = nodesDepth(root.right, sum + 1);
    return [left + right + sum];
  }
  return 0;
}

// all kinds of nodes

function allKindsOfNodes(root) {
  let addNodeCounts = {};
  nodeCounts(root, addNodeCounts);
  let addNodeDepths = {};
  nodeDepths(root, addNodeDepths, addNodeCounts);

  return sumOfAllNodesDepth(root, addNodeDepths);
}

function nodeCounts(node, addNodeCounts) {
  if (node) {
    addNodeCounts[node.val] =
      nodeCounts(node.left, addNodeCounts) +
      nodeCounts(node.right, addNodeCounts) +
      1;
    return addNodeCounts[node.val];
  }
  return 0;
}

function nodeDepths(node, nodeDepthsCount, addNodeCounts) {
  if (node) {
    nodeDepthsCount[node.val] =
      nodeDepths(node.left, nodeDepthsCount, addNodeCounts) +
      nodeDepths(node.right, nodeDepthsCount, addNodeCounts);

    return addNodeCounts[node.val] + nodeDepthsCount[node.val];
  }
  return 0;
}

function sumOfAllNodesDepth(node, addNodeDepths) {
  if (node) {
    return (
      sumOfAllNodesDepth(node.left, addNodeDepths) +
      sumOfAllNodesDepth(node.right, addNodeDepths) +
      addNodeDepths[node.val]
    );
  }
  return 0;
}

function node(val) {
  return {
    val: val,
    left: null,
    right: null,
  };
}

const bt = node(1);
bt.left = node(2);
bt.right = node(3);
bt.left.left = node(4);
bt.left.right = node(5);
bt.right.left = node(6);
bt.right.right = node(7);
bt.left.left.left = node(8);
bt.left.left.right = node(9);
console.log(allKindsOfNodes(bt));
