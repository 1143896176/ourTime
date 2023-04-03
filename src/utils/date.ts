import dayjs from "dayjs";
import toObject from "dayjs/plugin/toObject";
import dayOfYear from "dayjs/plugin/dayOfYear";
dayjs.extend(toObject)
dayjs.extend(dayOfYear)

export const day = dayjs


export function appendTime(time?:number) {
    if(!time){
        time = new Date().getTime() - new Date('2022-09-12 10:50:00').getTime()
    }
    console.log(time)
    const day = Math.floor(time / (86400000)),
        h = Math.floor((time % 86400000) / 3600000),
        m = Math.floor(((time % 86400000) / 3600000) / 60000)

    return {
        day,
        h,
        m
    }
}