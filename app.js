const pairs = {
        dildo: {name:"Kato", receiver:"Karo"},
        koekie: {name:"Kiany", receiver:"Stacey"},
        honda: {name:"Chloe", receiver:"Kiany"},
        naruto: {name:"Stacey", receiver:"Kato"},
        piepschuim: {name:"Luiz", receiver:"Chloe"},
        anaal: {name:"Karo", receiver:"Luiz"},
      };

      function reveal() {
        const secret = document.getElementById("secretInput").value.trim().toLowerCase();
        const result = document.getElementById("result");

        if (pairs[secret]) {
          const { name, receiver } = pairs[secret];
          result.textContent = `${name}, you're getting a gift for ${receiver}! 🎁`;
        } else {
          result.textContent = "Invalid secret word. Try again!";
        }
      }