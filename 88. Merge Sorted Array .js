var merge = function(nums1, m, nums2, n) {
    for(let i = 0 ; i < n ; i ++){
        nums1[m + i] = nums2[i];
    }
    num1 = nums1.sort(function(a, b){return a - b})
};