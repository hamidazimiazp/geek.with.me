from string import ascii_letters

# 3 step shift ==> h a m i d = k d p l g

def encrypt(string, key):
    alpha = ascii_letters
    result = ""    

    for char in string:
        if char not in alpha:
            result += char
        else:
            new_key = (alpha.index(char) + key) % len(alpha)
            result += alpha[new_key]
        
    return result


def decrypt(string, key):
    return encrypt(string, (-1 * key))


def brute_force(string):
    alpha = ascii_letters
    key = 1
    brute_force_data = {}
    
    while key <= len(alpha):
        brute_force_data[key] = decrypt(string, key)  
        key += 1
        
    return brute_force_data

    
if __name__ == "__main__":
    
    print("Encrypt --> " + encrypt("Geek", 3))
    print("Decrypt --> " + decrypt(encrypt("Geek", 3), 3))
    print()
    print("decrypt --> " + str(brute_force("Jhhn")))