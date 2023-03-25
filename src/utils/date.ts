import dayjs from "dayjs";
import toObject from "dayjs/plugin/toObject";
import dayOfYear from "dayjs/plugin/dayOfYear";
dayjs.extend(toObject)
dayjs.extend(dayOfYear)

export const day = dayjs