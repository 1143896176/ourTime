 type Pos = 1|2|3
 type Difficulty = Pos


export class Container {
    public static noMoveList: Array<[number, number]> = []

    public width!:number
    public count!:number
    public totalGrid!:number
    constructor(private readonly warpEle:Element,private size:Difficulty=2) {
        this. count = this.size + 2
        this. totalGrid = Math.pow(this.count, 2)
        this.init()
        this.setDifficulty()
        this.createGrid()
    }

    init(){
        const style = (this.warpEle as HTMLElement).style
        const allWidth = window.innerWidth
        this.width = (allWidth*8)/10
        style.width = this.width+'px'
        style.height = this.width+'px'
    }

    setDifficulty() {
        for (let i = 1; i < this.totalGrid; i++) {
            if (i % this.count == 0) {
                Container.noMoveList.push([i, i + 1])
                i++
            }
        }
    }
    createGrid(){

        const arrGrid = Array(this.totalGrid).fill(null).map((v,index)=>{
            return {
                originIndex:index,
                width:30,
                size:this.size,
                ele:document.createElement("div")
            }
        })
        console.log(arrGrid)
    }
}


export class Grid{
    public x!:Pos
    public y!:Pos
    public isNull!:boolean
    private opt!:Opt
    constructor(
        private readonly ele:HTMLElement,
        public readonly size :number,
        private readonly width:number,
        public readonly originIndex:number,
        public index:number,
    ) {
        this.init()
    }

    init(){
        if(this.originIndex===8){
            this.isNull = true
        }
        const style =  this.ele.style
        style.width = this.width+'px'
        style.height = this.width+'px'
        this.ele.innerHTML = this.index+''
        this.opt = new Opt(this)
        this.x = this.index % 3 as Pos
        this.y = Math.floor(this.index /3 )as Pos
        this.updatePos()
    }

   public updatePos(){
        this.ele.className += `pos-x-${this.x} pos-y-${this.y}`
    }
}

export class Opt {
    private num !:number
    constructor(private grid:Grid) {
        this.num = this.grid.size+2
    }
    public move(){
        if(this.grid.isNull){
            return
        }
        const index = this.grid.index



    }
}