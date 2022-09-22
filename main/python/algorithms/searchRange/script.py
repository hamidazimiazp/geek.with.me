""" Search Range

    [5, 7, 7, 8, 8, 8, 10], 8 => [3, 5]
    [5, 7, 7, 8, 8, 8, 10], 11 => [None, None]
"""


def searchRange(nums, target):
    low = 0
    high = len(nums) - 1
    
    while low <= high:
        mid = low + (high - low) // 2
        if target < nums[mid]:
            high = mid - 1
        elif target > nums[mid]:
            low = mid + 1
        else:
            break
    
    for item in range(len(nums) - 1, -1, -1):
        if nums[item] == target:
            return [mid, item]
    return [None, None]


print(searchRange([5, 7, 7, 8, 8, 8, 10], 8))
print(searchRange([5, 7, 7, 8, 8, 8, 10], 11))
                    