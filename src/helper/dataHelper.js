const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const prettyData = {
    getTime: (data) => {
        const time = new Date(data * 1000);
        let min = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
        return `${time.getHours()}:${min}`;
    },

    getDay: (data) => {
        const day = new Date(data * 1000);
        return dayOfWeek[day.getDay()];
    },

    getMonthAndDay: (data) => {
        const day = new Date(data * 1000);
        let d = day.getDate() < 10 ? `0${day.getDate()}` : day.getDate();
        let month = day.getMonth() < 9 ? `0${day.getMonth() + 1}` : day.getMonth() + 1;
        return `${d}.${month}`;
    }

};