new Vue({
  el: "#app",
  data: {
    startGame: false,
    meScore: 100,
    monsterScore: 100,
    point: []
  },
  methods: {
    attack: function(randomFnc) {
      const meRnd = randomFnc();
      const moRnd = randomFnc();
      console.log("meRnd: ", meRnd);
      console.log("moRnd: ", moRnd);
      this.point.push({
        text: "PLAYER HITS MONSTER FOR " + meRnd,
        color: "blue"
      });
      this.point.push({
        text: "MONSTER HITS PLAYER FOR " + moRnd,
        color: "red"
      });
      let zeroReached = false;

      if (this.meScore - meRnd <= 0) {
        this.meScore = 0;
        zeroReached = true;
      } else {
        this.meScore = this.meScore - meRnd;
      }

      if (this.monsterScore - moRnd <= 0) {
        this.monsterScore = 0;
        zeroReached = true;
      } else {
        this.monsterScore = this.monsterScore - moRnd;
      }

      if (zeroReached) {
        this.startGame = false;
        let resultText = "";
        if (this.monsterScore == 0 && this.meScore == 0) {
          resultText = "its a draw";
        } else {
          if (this.monsterScore == 0) {
            resultText = "Monster has won";
          } else {
            resultText = "User has won";
          }
        }
        alert(resultText);
      } else {
        return;
      }
    },
    getRandomMaxTen: function() {
      return Math.floor(Math.random() * 10) + 1;
    },
    getRandomMaxTwenty: function() {
      return Math.floor(Math.random() * 20) + 10;
    },
    heal: function() {
      const monsterHit = this.getRandomMaxTen();
      const healMe = this.getRandomMaxTen();

      if (this.meScore + healMe > 100) {
        this.meScore = 100;
      } else {
        this.meScore = this.meScore + healMe;
      }

      if (this.meScore - monsterHit <= 0) {
        this.meScore = 0;
        this.startGame = false;
        alert("Monster has won");
      } else {
        this.meScore = this.meScore - monsterHit;
      }

      this.point.push("PLAYER HEALS HIMSELF FOR " + healMe);
      this.point.push("MONSTER HITS PLAYER FOR " + monsterHit);
    }
  }
});
