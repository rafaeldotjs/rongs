new Vue({
  el:'#app',
  data:{
    blocks:[],
    playerIndex:0
  },
  methods:{
    generate:function(){
      this.blocks = [];
      for(var i = 0; i < 900; i++){
        let block = {
          terrain:'green',
          backgroundContent:'T',
          backgroundContentColor:'#0C3',
          content:'',
          contentColor:'#0C3',
          index:i
        };
        if(i == 0){
          block.content = '@';
          block.contentColor = '#F00';
          this.playerIndex = i;
        }
        this.blocks.push(block);
      }
      window.removeEventListener('keydown', this.move);
      window.addEventListener('keydown', this.move);
    },
    move:function(e){
      switch(e.code){
        case 'ArrowUp':
          if(this.playerIndex-30>0){
            if(this.blocks[this.playerIndex-30].content==''){
              this.blocks[this.playerIndex].content = '';
              this.blocks[this.playerIndex-30].content = '@';
              this.blocks[this.playerIndex-30].contentColor = '#F00';
              this.playerIndex = this.playerIndex - 30;
            }
          }
          break;
        case 'ArrowRight':
          if((this.playerIndex+1)%30!=0){
            if(this.blocks[this.playerIndex+1].content==''){
              this.blocks[this.playerIndex].content = '';
              this.blocks[this.playerIndex+1].content = '@';
              this.blocks[this.playerIndex+1].contentColor = '#F00';
              this.playerIndex++;
            }
          }
          break;
        case 'ArrowDown':
          if(this.playerIndex+30<900){
            if(this.blocks[this.playerIndex+30].content==''){
              this.blocks[this.playerIndex].content = '';
              this.blocks[this.playerIndex+30].content = '@';
              this.blocks[this.playerIndex+30].contentColor = '#F00';
              this.playerIndex = this.playerIndex + 30;
            }
          }
          break;
        case 'ArrowLeft':
          if(this.playerIndex%30!=0){
            if(this.blocks[this.playerIndex-1].content==''){
              this.blocks[this.playerIndex].content = '';
              this.blocks[this.playerIndex-1].content = '@';
              this.blocks[this.playerIndex-1].contentColor = '#F00';
              this.playerIndex--;
            }
          }
          break;
        }
      }
  }
});