type Pos = 1 | 2 | 3
type Difficulty = Pos
type Callback = (type: string, value?: any) => void

export class Container {
    public static noMoveList: Array<[number, number]> = []
    public static allGrid: Array<Grid>
    public static callback: Callback
    public static count: number
    public static bg: string
    public static Timer: number

    public width!: number
    public totalGrid!: number

    constructor(private readonly warpEle: Element, private bg: string, private callback: Callback, private size: Difficulty = 1) {
        Container.count = this.size + 2
        Container.bg = this.bg
        Container.callback = this.callback

        this.totalGrid = Math.pow(Container.count, 2)
        this.init()
        this.setDifficulty()
        this.createGrid()
    }

    init() {
        const style = (this.warpEle as HTMLElement).style
        const allWidth = window.innerWidth
        this.width = (allWidth * 9) / 10
        style.width = this.width + 'px'
        style.height = this.width + 'px'
        style.gridTemplateColumns = `repeat(${Container.count}, 1fr)`
        style.gridTemplateRows = `repeat(${Container.count}, 1fr)`
    }

    setDifficulty() {
        for (let i = 1; i < this.totalGrid; i++) {
            if (i % Container.count == 0) {
                Container.noMoveList.push([i, i + 1])
                i++
            }
        }
    }

    createGrid() {
        const girdWidth = this.width / Container.count
        const arrGrid = Array(this.totalGrid).fill(null)
            .map((v, index) => {
                const x = index % Container.count as Pos
                const y = Math.floor(index / Container.count) as Pos
                return {
                    originIndex: index,
                    ele: document.createElement("div"),
                    bgStyle: `url(${Container.bg}) -${x * (girdWidth - 5)}px -${y * (girdWidth - 5)}px no-Repeat `
                }
            })

        Container.allGrid = arrGrid.map((value, index) => {
            const {originIndex, ele, bgStyle} = value
            return new Grid(this.warpEle as HTMLElement, ele, originIndex, index, bgStyle)
        })
    }

    public static isSuccess() {
        const result = this.allGrid.every((grid) => grid.index === grid.originIndex)
        if (result) {
            const isNullGrid = Container.allGrid.find(grid => grid.isNull)
            isNullGrid!.ele.style.background = isNullGrid!.bgStyle
            isNullGrid!.ele.style.backgroundSize = Container.count + '00%'
            Container.callback && Container.callback('win', '')
        }
    }

    clearGrid() {
        this.warpEle.innerHTML = ''
        Container.allGrid = []
    }

    public reSet() {
        this.clearGrid()
        this.createGrid()
       this.autoMove()
    }

    public autoMove(){
        const nullGrid = Container.allGrid.find(grid => grid.isNull)
        const nullGridIndex = nullGrid!.index

        const topGridIndex = (nullGridIndex - Container.count) >= 0 ? (nullGridIndex - Container.count) : null
        const leftGridIndex = Container.noMoveList.map(v=>v.toString()).find(v => {
            return !v.includes(nullGridIndex-1 + '') && !v.includes((nullGridIndex ) + '')
        }) ? nullGridIndex - 1 : null
        let setupGrid :number|null

        const num = Math.random()
        console.log(num)
        if(num>0.5){
            // setupGrid = topGridIndex!==null?
            //     topGridIndex:
            //     leftGridIndex!==null?leftGridIndex:null
            if(topGridIndex===null){
                setupGrid = leftGridIndex
            }else {
                setupGrid = topGridIndex
            }
        }else {
            // setupGrid = leftGridIndex!==null?
            //     leftGridIndex:
            //     topGridIndex!==null?topGridIndex:null
            if(leftGridIndex===null){
                setupGrid = topGridIndex
            }else {
                setupGrid = leftGridIndex
            }
        }
        console.log(setupGrid)
        if(setupGrid===null||setupGrid<0){

            return
        }else {
            Container.allGrid[setupGrid].ele.click()
            setTimeout(
                this.autoMove.bind(this)
            ,500)
        }
    }
}

export class Grid {
    public x!: Pos
    public y!: Pos
    public isNull!: boolean
    public opt!: Opt

    constructor(
        private warpEle: HTMLElement,
        public readonly ele: HTMLElement,
        public readonly originIndex: number,
        public index: number,
        public bgStyle: string,
    ) {
        this.init()
        this.addClickGrid()
    }

    init() {
        if (this.originIndex === Math.pow(Container.count, 2) - 1) {
            this.isNull = true
        }

        this.opt = new Opt(this)

        this.updatePos()
        this.toWarp()
    }

    addClickGrid() {
        this.ele.addEventListener('click', (e) => {
            this.opt.move()
            Container.callback && Container.callback('click', '')
        })
    }

    public updatePos() {
        this.x = this.index % Container.count as Pos
        this.y = Math.floor(this.index / Container.count) as Pos
        this.ele.classList.add(`pos-grid`)
        // this.ele.innerHTML = (this.originIndex + 1) + ''
        const style = this.ele.style
        style.background = this.isNull ? '#FFF' : '#aaa'
        if (!this.isNull) {
            this.ele.style.background = this.bgStyle
            style.transition = ".5s all";
        }
        style.backgroundSize = Container.count + '00%'


    }

    public toWarp() {
        this.warpEle.append(this.ele)
    }

    public InsertToWarp(index: number) {
        this.warpEle.insertBefore(this.ele, Container.allGrid[index + 1] && Container.allGrid[index + 1].ele)
    }

    public removeToWarp() {
        this.warpEle.removeChild(this.ele)
    }

    public setIndex(index: number) {
        this.index = index
        this.updatePos()
    }

}

export class Opt {
    private readonly num !: number

    constructor(private grid: Grid) {
        this.num = Container.count
    }

    public move() {
        if (this.grid.isNull) {
            return
        }

        const allGrid = Container.allGrid
        const noMoveList = Container.noMoveList
        const index = this.grid.index + 1

        const isNullGrid = allGrid.find((grid) => {
            return grid.isNull
        })
        const isNullGridIndex = isNullGrid!.index + 1

        const abs = Math.abs(index - isNullGridIndex)

        if (abs === this.num) {
            this.moveOpt(isNullGrid!, isNullGridIndex, index)
            return;
        }
        if (abs === 1) {
            const canMove = noMoveList.findIndex(value => {
                return value.includes(index) && value.includes(isNullGridIndex)
            })
            if (canMove === -1) {
                this.moveOpt(isNullGrid!, isNullGridIndex, index)
            }
        }

    }

    private moveOpt(isNullGrid: Grid, isNullGridIndex: number, index: number) {
        Container.allGrid.splice(isNullGridIndex - 1, 1, this.grid)
        Container.allGrid.splice(index - 1, 1, isNullGrid!)

        Container.allGrid[index - 1].InsertToWarp(index - 1)
        Container.allGrid[isNullGridIndex - 1].InsertToWarp(isNullGridIndex - 1)

        this.grid.setIndex(isNullGridIndex - 1)
        isNullGrid.setIndex(index - 1)
        console.log(`move ${isNullGridIndex} to ${index}  `)
        setTimeout(() => {
            Container.isSuccess()
        }, 0)
    }
}