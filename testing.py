import random


friends = ["Kato", "Kiany", "Chloe", "Stacey", "Luiz", "Karo"]

givers = friends[:]
receivers = friends[:]

random.shuffle(receivers)

while any(giver == receiver for giver, receiver in zip(givers, receivers)):
  random.shuffle(receivers)

for giver, receiver in zip(givers, receivers):
  print(f"{giver}, you are getting a present for {receiver}")