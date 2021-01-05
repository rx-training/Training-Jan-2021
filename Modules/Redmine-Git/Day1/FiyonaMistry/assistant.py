#!/usr/bin/env python3.8

import subprocess
from gtts import gTTS
import speech_recognition as sr
import webbrowser
import os
import smtplib
from playsound import playsound
import wikipedia

def talkToMe(audio):
    #print(audio)
    tts = gTTS(text = audio, lang = 'en-in', slow = False)
    tts.save('audio.mp3')
    playsound('audio.mp3')

def myCommand():
    r = sr.Recognizer()

    with sr.Microphone() as source:
        print('Listening...')
        #talkToMe('Listening...')
        r.pause_threshold = 1
        r.adjust_for_ambient_noise(source)
        audio = r.listen(source)

    try:
        command = r.recognize_google(audio)
        print('You said : '+command+'\n')

    except Exception as e:
        print("Say that again please")
        talkToMe("Say that again please")
        return "None"
    
    return command

talkToMe('Hi Fiona, how are you?')

while True:
    command = myCommand().lower()

    if 'what about you' in command:
        talkToMe('I\'m also fine. How may I help you?')
    
    if 'chrome' in command:
        talkToMe('Opening Chrome...')
        webbrowser.open('https://google.com')

    if 'youtube' in command:
        talkToMe('Opening Youtube...')
        webbrowser.open('https://youtube.com')
    
    if 'music' in command:
        talkToMe('Opening Spotify for playing music...')
        subprocess.call('/usr/bin/spotify')

    if 'wikipedia' in command:
        talkToMe('Searching in Wikipedia...')
        command = command.replace("Wikipedia", "")
        results = wikipedia.summary(command, sentences = 1)
        print(results)
        talkToMe("According to Wikipedia...")
        talkToMe(results)

    if 'sleep' in command:
        talkToMe('Bye Fiona. See you soon...')
        exit()
