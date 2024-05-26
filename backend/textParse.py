# Python Imaging Library is a free and open-source additional library for the 
# Python programming language that adds support for opening, manipulating, and 
# saving many different image file formats
from PIL import Image 
from foodDetection import *
# Python-tesseract is an optical character recognition (OCR) tool for python. 
# That is, it will recognize and “read” the text embedded in images.
import pytesseract 

def textParse(fileName):
  # Defining paths to tesseract.exe 
  # and the image we would be using 
  path_to_tesseract = r"/opt/homebrew/bin/tesseract"

  image_path = r"uploads/" + fileName 
    
  # Opening the image & storing it in an image object 
  img = Image.open(image_path) 
    
  # Providing the tesseract executable 
  # location to pytesseract library 
  pytesseract.tesseract_cmd = path_to_tesseract 
    
  # Passing the image object to image_to_string() function 
  # This function will extract the text from the image 
  text = pytesseract.image_to_string(img) 
  
  # need to store text as data for dataset
  file_path = 'training1.txt' 
  text_file = open(file_path, "w")
  text_file.write(text)
  text_file.close()
  
  # Sending data to be trained on Transformer BERT
  training(text)