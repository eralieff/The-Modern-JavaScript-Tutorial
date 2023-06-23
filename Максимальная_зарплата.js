function topSalary(obj) {
    if (!Object.keys(obj).length) {
        return null;
    } else {
        let user = {};
        let topSalary = 0;

        for (let [key, value] of Object.entries(obj)) {
            if (value > topSalary) {
                topSalary = value;
                [user.name, user.salary] = [key, value];
            }
        }

        return user.name;
    }
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

topSalary(salaries);