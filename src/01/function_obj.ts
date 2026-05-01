let obj1: {
  job: string;
  getJob: () => string;
} = {
  job: "developer",
  getJob: function () {
    return this.job;
  },
};

let obj2: {
  skils: string[];
  job: string;
  getJob: () => string;
} = {
  skils: ["javascript", "typescript"],
  job: "developer",
  getJob: function () {
    return this.job;
  },
};
