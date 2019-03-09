let app = new Vue({
  el: '#app',
  data: {
    rockChoosen: false,
    paperChoosen: false,
    scissorsChoosen: false,
    notStarted: true,
    computerWeapon: '',
    computerPoints: '',
    playerPoints: '',
    
  },
   methods: {
     startGame() {
       this.notStarted = !this.notStarted
       this.computerWeapon = ''
       this.playerPoints = 0
       this.computerPoints = 0
     },
     chooseRock() {
       this.rockChoosen = true
       this.computerWeapon = Math.ceil(Math.random()*3);
     },
     chooseScissors() {
       this.scissorsChoosen = true
       this.computerWeapon = Math.ceil(Math.random()*3);
     },
     choosePaper() {
       this.paperChoosen = true
       this.computerWeapon = Math.ceil(Math.random()*3);
     },
     rematch() {
       this.rockChoosen = false
       this.scissorsChoosen = false
       this.paperChoosen = false
       this.computerWeapon = 0
     },
     rematchWin() {
       this.rockChoosen = false
       this.scissorsChoosen = false
       this.paperChoosen = false
       this.computerWeapon = 0
       this.playerPoints = this.playerPoints + 1
     },
     rematchLose() {
       this.rockChoosen = false
       this.scissorsChoosen = false
       this.paperChoosen = false
       this.computerWeapon = 0
       this.computerPoints = this.computerPoints + 1
     }
  }
});
