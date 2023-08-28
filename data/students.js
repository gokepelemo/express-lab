const students = {
  sallyb: {
    name: "Sally B",
    registered: true,
  },
  johnb: {
    name: "John B",
    registered: true,
  },
  miket: {
    name: "Mike T",
    registered: false,
  },
  charlesb: {
    name: "Charles B",
    registered: true,
  },
  gabrielr: {
    name: "Gabriel R",
    registered: false,
  },
  daniele: {
    name: "Daniel E",
    registered: true,
  },
};
module.exports = {
  getAll: function () {
    return students;
  },
};
