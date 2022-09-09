"""binary search

    [2, 3, 4, 6, 12, 19, 20, 21] 12 => 4
    [2, 3, 4, 6, 12, 19, 20, 21] 3333 => -1
"""

def binary_search(arr, elm):
    low, high = 0, len(arr) - 1
    
    while low <= high:
        mid = (high + low) // 2
        val = arr[mid]
        if val == elm:
            return mid
        elif val <= elm:
            low = mid + 1
        else:
            high = mid - 1
    return -1


print(binary_search([2, 3, 4, 6, 12, 19, 20, 21], 12))
print(binary_search([2, 3, 4, 6, 12, 19, 20, 21], 3333))