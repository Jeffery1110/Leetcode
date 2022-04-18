/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    var headNode = new ListNode();
    var currentNode = headNode;
    while(l1!=null && l2!=null){
        if(l1.val < l2.val){
            currentNode.next = l1;
            l1 = l1.next;
        }
        else{
            currentNode.next = l2;
            l2 = l2.next;
        }
        currentNode = currentNode.next;
    }
    if(l1 == null)
        currentNode.next = l2;
    else
        currentNode.next = l1;
    return headNode.next
};