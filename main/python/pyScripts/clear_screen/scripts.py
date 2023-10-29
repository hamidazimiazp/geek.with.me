import os
import time

def clear_screen():
    os.system("cls" if os.name == "nt" else "clear")
    
print("This page will be cleared in 3 seconds -_-")

time.sleep(3)

clear_screen()