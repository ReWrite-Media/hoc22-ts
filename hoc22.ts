// enums
enum Weight {
    CHICKEN = 10,
    COW = 11,
    SHEEP = 13
}

enum Custom {
    //% blockIdentity="blocks.custom" enumval=998 block="Arrow Up Orange"
    //% jres alias=ARROW_UP_ORANGE
    ArrowUpOrange = 998,
    //% blockIdentity="blocks.custom" enumval=997 block="Arrow Down Magenta"
    //% jres alias=ARROW_DOWN_MAGENTA
    ArrowDownMagenta = 997,
    //% blockIdentity="blocks.custom" enumval=996 block="Arrow Left Blue"
    //% jres alias=ARROW_LEFT_BLUE
    ArrowLeftBlue = 996,
    //% blockIdentity="blocks.custom" enumval=995 block="Arrow Right Yellow"
    //% jres alias=ARROW_RIGHT_YELLOW
    ArrowRightYellow = 995
}

enum TwoDirection{
    Left,
    Right
}


// global variables
const placeBlockMechanicsCommunicationPos = world(0, 64, 0);
const weightDropPosition = world(-18, 77, 162);
const communicationsTimeout = 100;


//%  block="Hour of Code 2022" weight=200 color=#6100ff icon="\u26EB"
namespace hoc22 {

    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop %n `Block.MagentaConcrete`"
    export function summonColoredBlockMagenta(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop %n `Block.LightBlueConcrete`"
    export function summonColoredBlockLightBlue(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop %n `Block.YellowConcrete`"
    export function summonColoredBlockYellow(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop %n `Block.LimeConcrete`"
    export function summonColoredBlockLime(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Summon weight (POC1-b)
     */
    //% block="summon %n `Custom.WeightedChicken`"
    export function summonWeightChicken(n: number): void {
        for (let i = 0; i < n; i++) {
            mobs.spawn(Weight.CHICKEN, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon weight (POC1-b)
     */
    //% block="summon %n `Custom.WeightedCow`"
    export function summonWeightCow(n: number): void {
        for (let i = 0; i < n; i++) {
            mobs.spawn(Weight.COW, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon weight (POC1-b)
     */
    //% block="summon %n `Custom.WeightedSheep`"
    export function summonWeightSheep(n: number): void {
        for (let i = 0; i < n; i++) {
            mobs.spawn(Weight.SHEEP, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Agent Move (POC1-c)
     */
    //% block="agent move %d by %n"
    export function agentMove(d: SixDirection, n: number): void {
        agent.move(d, n)
    }

    /**
     * Place Block
     */
    //% block="place block"
    export function placeBlock(): void {
        placeBlockSignal()
        loops.pause(communicationsTimeout)
    }

    /**
     * Zombie Move Forward
     */
    //% block="move zombie forward by %n"
    export function zombieMoveForward(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal1(Block.OrangeConcrete)
        }
    }

    /**
     * Wait for Block
     */
    //% block="wait for block"
    export function waitForBlock(): void {
        placeBlockSignal1(Block.MagentaConcrete)
    }

    /**
     * Super Jump
     */
    //% block="super jump"
    export function superJump(): void {
        placeBlockSignal1(Block.MagentaConcrete)
    }

    /**
     * Pull Lever Down
     */
    //% block="pull lever down"
    export function pullLeverDown(): void {
        placeBlockSignal1(Block.LightBlueConcrete)
    }

    /**
     * Move NPC Forward
     */
    //% block="move NPC forward by %n"
    export function npcMoveForward(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal1(Block.OrangeConcrete)
        }
    }
    /**
     * Move NPC Back
     */
    //% block="move NPC back by %n"
    export function npcMoveBack(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal1(Block.MagentaConcrete)
        }
    }
    /**
     * Move NPC Left
     */
    //% block="move NPC left by %n"
    export function npcMoveLeft(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal1(Block.LightBlueConcrete)
        }
    }
    /**
     * Move NPC Right
     */
    //% block="move NPC right by %n"
    export function npcMoveRight(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal1(Block.YellowConcrete)
        }
    }

    /**
     * Move NPC to Light Blue
     */
    //% block="move NPC to light blue"
    export function npcMoveLightBlue(): void {
        placeBlockSignal1(Block.LightBlueConcrete)
    }
    /**
     * Move NPC to Pink
     */
    //% block="move NPC to pink"
    export function npcMovePink(): void {
        placeBlockSignal1(Block.PinkConcrete)
    }
    /**
     * Move NPC to Lime
     */
    //% block="move NPC to lime"
    export function npcMoveLime(): void {
        placeBlockSignal1(Block.LimeConcrete)
    }
    /**
     * Move NPC to Yellow
     */
    //% block="move NPC to yellow"
    export function npcMoveYellow(): void {
        placeBlockSignal1(Block.YellowConcrete)
    }

    /**
     * Slide Green Row
     */
    //% block = "slide green row %d"
    export function slideGreenRow(d: TwoDirection): void{
        switch(d) {
            case TwoDirection.Left:
                placeBlockSignal1(Block.OrangeConcrete);
                break;
            case TwoDirection.Right:
                placeBlockSignal1(Block.MagentaConcrete);
                break;
        }

    }
    /**
     * Slide Yellow Row
     */
    //% block = "slide yellow row %d"
    export function slideYellowRow(d: TwoDirection): void {
        switch (d) {
            case TwoDirection.Left:
                placeBlockSignal1(Block.LightBlueConcrete);
                break;
            case TwoDirection.Right:
                placeBlockSignal1(Block.YellowConcrete);
                break;
        }

    }
    /**
     * Slide Red Row
     */
    //% block = "slide red row %d"
    export function slideRedRow(d: TwoDirection): void {
        switch (d) {
            case TwoDirection.Left:
                placeBlockSignal1(Block.LimeConcrete);
                break;
            case TwoDirection.Right:
                placeBlockSignal1(Block.PinkConcrete);
                break;
        }

    }

    /**
     * Turn Off Redstone Lamp
     */
    //% block="turn off `Block.RedstoneLamp`"
    export function toggleLight(): void {
        placeBlockSignal1(Block.LimeConcrete)
    }

    /**
     * Baking Bread Harvest Wheat
     */
    //% block="harvest wheat `Custom.BreadBakeOne`"
    export function bakingBreadWheat(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Mill Wheat
     */
    //% block="mill wheat `Custom.BreadBakeTwo`"
    export function bakingBreadGrain(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Make Dough
     */
    //% block="make dough `Custom.BreadBakeThree`"
    export function bakingBreadDough(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Bake Into Bread
     */
    //% block="bake into bread `Custom.BreadBakeFour`"
    export function bakingBreadBread(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
     * Move Knight to Light Blue
     */
    //% block="move knight to light blue"
    export function teleportLightBlueLever(): void {
        placeBlockSignal1(Block.LightBlueConcrete)
    }
    /**
     * Move Knight to Magenta
     */
    //% block="move knight to magenta"
    export function teleportMagentaLever(): void {
        placeBlockSignal1(Block.MagentaConcrete)
    }
    /**
     * Move Knight to Yellow
     */
    //% block="move knight to yellow"
    export function teleportYellowLever(): void {
        placeBlockSignal1(Block.YellowConcrete)
    }
    /**
     * Move Knight to Orange
     */
    //% block="move knight to orange"
    export function teleportOrangeLever(): void {
        placeBlockSignal1(Block.OrangeConcrete)
    }
    /**
      * Feed The House Apple
      */
    //% block="feed house %n `Item.Apple`"
    export function feedHouseApple(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
      * Feed The House Salmon
      */
    //% block="feed house %n `Item.RawSalmon`"
    export function feedHouseSalmon(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }

    }
    /**
      * Feed The House Mushroom Stew
      */
    //% block="feed house %n `Item.MushroomStew`"
    export function feedHouseMushroomStew(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
      * Dinner Table Swap Red
      */
    //% block="swap `Block.RedCarpet` side"
    export function dinnerTableSwapRed(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Green
      */
    //% block="swap `Block.LimeCarpet` side"
    export function dinnerTableSwapGreen(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Blue
      */
    //% block="swap `Block.BlueCarpet` side"
    export function dinnerTableSwapBlue(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Yellow
      */
    //% block="swap `Block.YellowCarpet` side"
    export function dinnerTableSwapYellow(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Mosaic Push Up
      */
    //% block="push `Custom.ChessUpBlue`"
    export function mosaicPushUp(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push Down
      */
    //% block="push `Custom.ChessDownRed`"
    export function mosaicPushDown(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push Left
      */
    //% block="push `Custom.ChessLeftYellow`"
    export function mosaicPushLeft(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push right
      */
    //% block="push `Custom.ChessRightGreen`"
    export function mosaicPushRight(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
     * Cursor Move Orientation One
     */
    //% block="cursor move `Custom.ArrowUpOrange` by %n"
    export function cursorMoveOrientationOneUp(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation One
     */
    //% block="cursor move `Custom.ArrowDownMagenta` by %n"
    export function cursorMoveOrientationOneDown(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation One
     */
    //% block="cursor move `Custom.ArrowLeftBlue` by %n"
    export function cursorMoveOrientationOneLeft(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation One
     */
    //% block="cursor move `Custom.ArrowRightYellow` by %n"
    export function cursorMoveOrientationOneRight(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Cursor Move Orientation two
     */
    //% block="cursor move `Custom.ArrowUpMagenta` by %n"
    export function cursorMoveOrientationTwoUp(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation two
     */
    //% block="cursor move `Custom.ArrowDownOrange` by %n"
    export function cursorMoveOrientationTwoDown(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation two
     */
    //% block="cursor move `Custom.ArrowLeftYellow` by %n"
    export function cursorMoveOrientationTwoLeft(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation two
     */
    //% block="cursor move `Custom.ArrowRightBlue` by %n"
    export function cursorMoveOrientationTwoRight(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Move King
     */
    //% block="move king %direction by %n"
    export function kingMove(direction: Custom, n: number): void {
        let block = Block.WhiteConcrete
        switch (direction) {
            case Custom.ArrowUpOrange:
                block = Block.OrangeConcrete
                break;
            case Custom.ArrowDownMagenta:
                block = Block.MagentaConcrete
                break;
            case Custom.ArrowLeftBlue:
                block = Block.LightBlueConcrete
                break;
            case Custom.ArrowRightYellow:
                block = Block.YellowConcrete
                break;
        }

        for (let i = 0; i < n; i++) {
            blocks.place(block, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Move Queen
     */
    //% block="move queen %direction by %n"
    export function queenMove(direction: Custom, n: number): void {
        let block = Block.WhiteConcrete
        switch (direction) {
            case Custom.ArrowUpOrange:
                block = Block.LimeConcrete
                break;
            case Custom.ArrowDownMagenta:
                block = Block.PinkConcrete
                break;
            case Custom.ArrowLeftBlue:
                block = Block.GrayConcrete
                break;
            case Custom.ArrowRightYellow:
                block = Block.LightGrayConcrete
                break;
        }

        for (let i = 0; i < n; i++) {
            blocks.place(block, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
      * Potion Room Mixing Puzzle Nether Wart
      */
    //% block="add `Item.NetherWart`"
    export function mixingPuzzleNetherWart(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Potion Room Mixing Puzzle Phantom Membrane
      */
    //% block="add `Custom.PhantomMembrane`"
    export function mixingPuzzlePhantomMembrane(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Potion Room Mixing Puzzle Spider Eye
      */
    //% block="add `Item.FermentedSpiderEye`"
    export function mixingPuzzleSpiderEye(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
     * Break Block
     */
    //% block="break block"
    export function breakBlock(): void {
        placeBlockSignal1(Block.LimeConcrete)
    }

    /**
     * Open Trapdoor
     */
    //% block="open trapdoor"
    export function openTrapdoor(): void {
        placeBlockSignal1(Block.LimeConcrete)
    }

    /**
      * Greenhouse Flower Planting Red Flower
      */
    //% block="plant `Block.Poppy`"
    export function flowerPlantingRedFlower(): void {
        blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }


    /**
      * Greenhouse Flower Planting Yellow Flower
      */
    //% block="plant `Block.YellowFlower`"
    export function flowerPlantingYellowFlower(): void {
        blocks.place(Block.PinkConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Greenhouse Flower Planting Blue Flower
      */
    //% block="plant `Block.BlueOrchid`"
    export function flowerPlantingBlueFlower(): void {
        blocks.place(Block.GrayConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Lab Minecart Sorting Zombie
      */
    //% block="sort %n `Custom.ZombieFace`"
    export function minecraftSortingZombie(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
      * Lab Minecart Sorting Skeleton
      */
    //% block="sort %n `Custom.SkeletonFace`"
    export function minecraftSortingSkeleton(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
      * Lab Minecart Sorting Creeper
      */
    //% block="sort %n `Custom.CreeperFace`"
    export function minecraftSortingCreeper(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    //% block="`Custom.PhantomMembrane`"
    export function phantomMembrane(): void { }

    // helper functions
    function resetSignal(): void {
        blocks.place(Block.WhiteConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    function placeBlockSignal(): void {
        blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    function placeBlockSignal1(block: Block): void {
        blocks.place(block, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

}