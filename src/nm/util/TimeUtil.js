export default class TimeUtil {
    static formatTime(ms) {
        const sec = Math.round(ms / 1000);
        const min = Math.floor(sec / 60);
        const left_sec = sec - min * 60;
        return TimeUtil.formatSec(min) + ":" + TimeUtil.formatSec(left_sec);
    }

    static formatSec(sec) {
        if (sec < 10) {
            return "0" + sec;
        }
        else {
            return sec;
        }
    }
}
