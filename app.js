const pairs = {
        dildo: { name: "Kato", receiver: "Chloe" },
        koekie: { name: "Luiz", receiver: "Karo" },
        honda: { name: "Kiany", receiver: "Stacey" },
        piepschuim: { name: "Chloe", receiver: "Luiz" },
        naruto: { name: "Stacey", receiver: "Kato" },
        anaal: { name: "Karo", receiver: "Kiany" },
      };

      function reveal() {
        const secret = document.getElementById("secretInput").value.trim();
        const result = document.getElementById("result");

        if (pairs[secret]) {
          const { name, receiver } = pairs[secret];
          result.textContent = `${name}, you're getting a gift for ${receiver}! 🎁`;
        } else {
          result.textContent = "Invalid secret word. Try again!";
        }
      }