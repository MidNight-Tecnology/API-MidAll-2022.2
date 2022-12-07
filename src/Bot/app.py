import pyautogui
import time

'''
1- entrar no terminal
2- localizar diretório
3- startar o Walter
4- digitar o comando "python app.py"
5- esperar 10 segundos
6- ir pro Junior 
7- digitar o comando "node LinkBot.js"
'''
pyautogui.press('winleft')
time.sleep(2)
pyautogui.write('comand prompt')
time.sleep(2)
pyautogui.press('enter')
time.sleep(2)
pyautogui.write('cd desktop')
pyautogui.press('enter')
time.sleep(2)
pyautogui.write('cd PROJETOS/API-Midall-2022.2')
pyautogui.press('enter')
time.sleep(2)
pyautogui.write('cd src')
pyautogui.press('enter')
time.sleep(2)
pyautogui.write('cd bot')
pyautogui.press('enter')
time.sleep(2)
pyautogui.write('cd Walter')
pyautogui.press('enter')
time.sleep(2)
pyautogui.write('python app.py')
pyautogui.press('enter')
time.sleep(8)

pyautogui.write('cd ..')
pyautogui.press('enter')
pyautogui.write('cd Junior')
pyautogui.press('enter')
pyautogui.write('node LinkBot.js')
pyautogui.press('enter')
time.sleep(100)

pyautogui.write('cd ..')
pyautogui.press('enter')
pyautogui.write('cd Nicole')
pyautogui.press('enter')
pyautogui.write('python Nicole.py')
pyautogui.press('enter')
time.sleep(10)

pyautogui.write('exit')
pyautogui.press('enter')






