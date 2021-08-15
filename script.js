new Vue({
    el:'#app',
    data:{
        'monsterHealth':100,
        'playerHealth':100,
        'attempt':1,
        'healStatus':false,
        'specialAttackStatus':false,
        'logs':[],
        'gameRunning':false
    },
   
    methods:{
        reset() {
            this.gameRunning=false;
            this.monsterHealth=100;
            this.playerHealth=100;
            this.logs=[];
        },
        startGame(){
            // this.playerHealth=100;
            // this.monsterHealth=100;
            this.gameRunning=true;
        },
        giveUp(){
            alert('Given Up! You Lost..!');
            this.reset();
            
        },
        attackMonster() {
            
            let attack=Math.floor(Math.random()*5+5);
            if(this.monsterHealth-attack<=0)
            {
                alert("Great! You Win..!");
                this.reset();
                return;
            }
            this.monsterHealth-=attack;
            this.attackPlayer();
            
            let currLog="Attacked by Player! Monster's Health reduced by "+ attack ;
            this.logs.push({log:currLog,status:"monster"});

        },
        attackPlayer() {
           
            let attack=Math.floor(Math.random()*5+7);
            if(this.playerHealth-attack<=0)
            {
                alert("Better Luck Next Time! You Loose..!");
                this.reset();
                return;
            }
            this.playerHealth-=attack;
            let currLog="Attacked by Monster! Player's Health reduced by "+ attack;
            this.attempt++;
            this.attempt%3==0?this.healStatus=true:"";
            this.attempt%3==0?this.specialAttackStatus=true:"";
            this.logs.push({log:currLog,status:"player"});

        },
        specialAttack() {
            let attack=Math.floor(Math.random()*10+7);
            if(this.monsterHealth-attack<=0)
            {
                alert("Great! You Win..!");
                this.reset();
                return;
            }
            this.monsterHealth-=attack;
            this.attackPlayer();
            let currLog="Special Attack by Player! Monster's Health reduced by "+ attack;
           this. logs.push({log:currLog,status:"special"});
           this.specialAttackStatus=false;
        },
        heal(){
            if(this.playerHealth<=85)
                this.playerHealth+=15;
            else
                this.playerHealth=100;
            this.attackPlayer();
            this.healStatus=false;
            let currLog="Healing! Player health increase by 15";
            this.logs.push({log:currLog,status:"heal"});
            
            
        }
    }

})