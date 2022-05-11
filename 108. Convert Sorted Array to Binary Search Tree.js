var sortedArrayToBST = function(nums) {
    if(nums.length == 0) return null;
    if(nums.length == 1) return new TreeNode(nums[0]);

    let middle = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[middle]);

    let left = nums.slice(0, middle);
    root.left = sortedArrayToBST(left);

    let right = nums.slice(middle+1, nums.length)
    root.right = sortedArrayToBST(right)

    return root
}