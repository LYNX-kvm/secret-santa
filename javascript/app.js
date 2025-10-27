const pairs = {
          dildo: {name:"Kato", receiver:"Karo"},
          koekie: {name:"Kiany", receiver:"Stacey"},
          naruto: {name:"Stacey", receiver:"Luiz"},
          piepschuim: {name:"Luiz", receiver:"Kato"},
          anaal: {name:"Karo", receiver:"Kiany"},
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
