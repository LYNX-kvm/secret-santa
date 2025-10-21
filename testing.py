import random

friends = ["Kato", "Kiany", "Chloe", "Stacey", "Luiz", "Karo"]
secrets = ["dildo", "koekie", "honda", "naruto", "piepschuim", "anaal"]

givers = friends[:]
receivers = friends[:]

random.shuffle(receivers)

while any(giver == receiver for giver, receiver in zip(givers, receivers)):
  random.shuffle(receivers)

for keyword, (giver, receiver) in zip(secrets, zip(givers, receivers)):
  print(f'{keyword}: {{name:"{giver}", receiver:"{receiver}"}}')