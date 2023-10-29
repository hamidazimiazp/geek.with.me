def packer(**kwargs):
    return kwargs

def unpacker(name=None, age=None):
    if(name and age):
        print(f"Hi {name} your age is : {age}")
    else:
        print("Invalid Data !")
        
        

pack = packer(name = "Hamid", age = 23)
print(pack)
unpacker(**pack)