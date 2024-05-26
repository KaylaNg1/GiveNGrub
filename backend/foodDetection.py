"""
Word Embeddings (word2vec) within MLP
 -> train from scratch ( write CBOW or SkipGRAM ) or using pre-trained model ( BERT )
 
BERT: Fine-tuning a pre-trained BERT model on your specific task can yield excellent results. BERT captures deep contextual relationships in text.
"""

from transformers import BertForSequenceClassification, BertTokenizer, Trainer, TrainingArguments
from datasets import load_dataset, Dataset
import pandas as pd
import torch

# Detect if MPS (Apple Silicon GPU) is available
# Checks if the system has an MPS (Metal Performance Shaders) device available, which is relevant for Apple Silicon GPUs. 
# If MPS is available, device is set to "mps"; otherwise, it defaults to "cpu".
device = torch.device("mps") if torch.backends.mps.is_built() else torch.device("cpu")

#  "bert-base-uncased" refers to the base version of the BERT model, which is case-insensitive
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels = 2).to(device) # 2 for binary

def tokenize(data):
  # Padding typically involves adding a special token (like [PAD] in BERT) to the sequence until it reaches the maximum length.
  # This is useful for creating uniform input sizes for batch processing in machine learning models.
  return tokenizer(data['text'], padding='max_length', truncation=True)

def training():
  # upload training data
  df = pd.read_csv('trainingData/trainingData1.csv')
  dataset = Dataset.from_pandas(df)
  
  # map() function is used to apply a function to each example in a dataset.
  # function should process the data in batches rather than individually
  tokenized_datasets = dataset.map(tokenize, batched = True)
  tokenized_datasets = tokenized_datasets.map(lambda examples: {'labels': examples['label']}, batched=True)
  
  # Split the dataset into train and test sets
  train_test_split = tokenized_datasets.train_test_split(test_size=0.1) # 10% data is reserved for testing/evaluation
  train_dataset = train_test_split['train']
  test_dataset = train_test_split['test']
  
  # Define training arguments
  training_args = TrainingArguments(
      output_dir='./results',
      num_train_epochs=50, # number of full passes through training dataset
      per_device_train_batch_size=8, # batch size for training
      per_device_eval_batch_size=8, # batch size for testing
      warmup_steps=200, # Number of steps to gradually increase the learning rate at the start of training.
      weight_decay=0.01, # Weight decay (L2 regularization) to prevent overfitting
      logging_dir='./logs',
  )

  # Initialize Trainer
  trainer = Trainer(
      model=model,
      args=training_args,
      train_dataset=train_dataset,
      eval_dataset=test_dataset,
  )
  
  # Train the model
  trainer.train()

# Function to classify text
def classify_text(text):
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True, max_length=512).to(device)
    outputs = model(**inputs)
    logits = outputs.logits
    predictions = logits.argmax(dim=-1).item()
    return 'food' if predictions == 1 else 'not food'

def testing():
  pass

# Example usage
training()
print("Apple: " + classify_text("apple"))  # Should output: 'food'
print("Car: " + classify_text("car"))    # Should output: 'not food'
print("Human: " + classify_text("human"))