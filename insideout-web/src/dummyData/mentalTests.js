const mentalTest = [
  {
    testId: 1,
    selection: [1, 3, 2, 1, 4, 2, 1, 3, 4, 2, 3, 2, 4, 1, 2],
    date: "2024-01-01",
    totalResult: 55,
    userId: 1,
  },
  {
    testId: 2,
    selection: [2, 4, 1, 3, 2, 1, 3, 2, 4, 1, 2, 3, 4, 2, 3],
    date: "2024-02-01",
    totalResult: 55,
    userId: 1,
  },
  {
    testId: 3,
    selection: [4, 2, 3, 1, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
    date: "2024-03-01",
    totalResult: 80,
    userId: 1,
  },
  {
    testId: 4,
    selection: [1, 4, 2, 3, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3],
    date: "2024-04-01",
    totalResult: 82,
    userId: 1,
  },
  {
    testId: 5,
    selection: [3, 2, 4, 1, 3, 2, 1, 4, 2, 3, 4, 1, 3, 2, 4],
    date: "2024-05-01",
    totalResult: 85,
    userId: 1,
  },
  {
    testId: 6,
    selection: [2, 1, 4, 3, 2, 1, 3, 4, 1, 2, 3, 4, 2, 1, 3],
    date: "2024-01-01",
    totalResult: 30,
    userId: 2,
  },
  {
    testId: 7,
    selection: [4, 3, 2, 1, 4, 3, 2, 1, 3, 4, 2, 1, 4, 3, 2],
    date: "2024-02-01",
    totalResult: 30,
    userId: 2,
  },
  {
    testId: 8,
    selection: [1, 2, 3, 4, 1, 2, 3, 4, 2, 1, 3, 4, 2, 1, 3],
    date: "2024-03-01",
    totalResult: 50,
    userId: 2,
  },
  {
    testId: 9,
    selection: [3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1],
    date: "2024-04-01",
    totalResult: 55,
    userId: 2,
  },
  {
    testId: 10,
    selection: [2, 3, 4, 1, 2, 3, 1, 4, 2, 3, 4, 1, 2, 3, 4],
    date: "2024-05-01",
    totalResult: 72,
    userId: 2,
  },
  {
    testId: 11,
    selection: [4, 3, 2, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
    date: "2024-01-01",
    totalResult: 25,
    userId: 3,
  },
  {
    testId: 12,
    selection: [1, 2, 3, 4, 2, 1, 3, 4, 2, 1, 3, 4, 2, 1, 3],
    date: "2024-02-01",
    totalResult: 45,
    userId: 3,
  },
  {
    testId: 13,
    selection: [3, 4, 1, 2, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
    date: "2024-03-01",
    totalResult: 55,
    userId: 3,
  },
  {
    testId: 14,
    selection: [2, 1, 4, 3, 3, 2, 1, 4, 2, 1, 3, 4, 2, 1, 3],
    date: "2024-04-01",
    totalResult: 75,
    userId: 3,
  },
  {
    testId: 15,
    selection: [1, 4, 2, 3, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3],
    date: "2024-05-01",
    totalResult: 93,
    userId: 3,
  },
  {
    testId: 16,
    selection: [4, 2, 3, 1, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
    date: "2024-01-01",
    totalResult: 15,
    userId: 4,
  },
  {
    testId: 17,
    selection: [1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2],
    date: "2024-02-01",
    totalResult: 25,
    userId: 4,
  },
  {
    testId: 18,
    selection: [2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1],
    date: "2024-03-01",
    totalResult: 35,
    userId: 4,
  },
  {
    testId: 19,
    selection: [3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
    date: "2024-04-01",
    totalResult: 45,
    userId: 4,
  },
  {
    testId: 20,
    selection: [4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
    date: "2024-05-01",
    totalResult: 50,
    userId: 4,
  },
  {
    testId: 21,
    selection: [1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2],
    date: "2024-01-01",
    totalResult: 5,
    userId: 5,
  },
  {
    testId: 22,
    selection: [2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1],
    date: "2024-02-01",
    totalResult: 25,
    userId: 5,
  },
  {
    testId: 23,
    selection: [3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
    date: "2024-03-01",
    totalResult: 55,
    userId: 5,
  },
  {
    testId: 24,
    selection: [4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
    date: "2024-04-01",
    totalResult: 55,
    userId: 5,
  },
  {
    testId: 25,
    selection: [1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2],
    date: "2024-05-01",
    totalResult: 50,
    userId: 5,
  },
  {
    testId: 26,
    selection: [2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4],
    date: "2024-01-01",
    totalResult: 20,
    userId: 6,
  },
  {
    testId: 27,
    selection: [3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1],
    date: "2024-02-01",
    totalResult: 30,
    userId: 6,
  },
  {
    testId: 28,
    selection: [4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
    date: "2024-03-01",
    totalResult: 30,
    userId: 6,
  },
  {
    testId: 29,
    selection: [1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2],
    date: "2024-04-01",
    totalResult: 55,
    userId: 6,
  },
  {
    testId: 30,
    selection: [2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1],
    date: "2024-05-01",
    totalResult: 88,
    userId: 6,
  },
  {
    testId: 31,
    selection: [3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
    date: "2024-01-01",
    totalResult: 25,
    userId: 7,
  },
  {
    testId: 32,
    selection: [4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
    date: "2024-02-01",
    totalResult: 25,
    userId: 7,
  },
  {
    testId: 33,
    selection: [1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2],
    date: "2024-03-01",
    totalResult: 25,
    userId: 7,
  },
  {
    testId: 34,
    selection: [2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1],
    date: "2024-04-01",
    totalResult: 25,
    userId: 7,
  },
  {
    testId: 35,
    selection: [3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
    date: "2024-05-01",
    totalResult: 60,
    userId: 7,
  },
  {
    testId: 36,
    selection: [4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
    date: "2024-01-01",
    totalResult: 35,
    userId: 8,
  },
  {
    testId: 37,
    selection: [1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2],
    date: "2024-02-01",
    totalResult: 25,
    userId: 8,
  },
  {
    testId: 38,
    selection: [2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1],
    date: "2024-03-01",
    totalResult: 35,
    userId: 8,
  },
  {
    testId: 39,
    selection: [3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
    date: "2024-04-01",
    totalResult: 65,
    userId: 8,
  },
  {
    testId: 40,
    selection: [4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
    date: "2024-05-01",
    totalResult: 70,
    userId: 8,
  },
  {
    testId: 41,
    selection: [1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2],
    date: "2024-01-01",
    totalResult: 35,
    userId: 9,
  },
  {
    testId: 42,
    selection: [2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1],
    date: "2024-02-01",
    totalResult: 45,
    userId: 9,
  },
  {
    testId: 43,
    selection: [3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
    date: "2024-03-01",
    totalResult: 55,
    userId: 9,
  },
  {
    testId: 44,
    selection: [4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
    date: "2024-04-01",
    totalResult: 65,
    userId: 9,
  },
  {
    testId: 45,
    selection: [1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2],
    date: "2024-05-01",
    totalResult: 70,
    userId: 9,
  },
  {
    testId: 46,
    selection: [2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1],
    date: "2024-01-01",
    totalResult: 10,
    userId: 10,
  },
  {
    testId: 47,
    selection: [3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
    date: "2024-02-01",
    totalResult: 10,
    userId: 10,
  },
  {
    testId: 48,
    selection: [4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
    date: "2024-03-01",
    totalResult: 10,
    userId: 10,
  },
  {
    testId: 49,
    selection: [1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2],
    date: "2024-04-01",
    totalResult: 15,
    userId: 10,
  },
  {
    testId: 50,
    selection: [2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1],
    date: "2024-05-01",
    totalResult: 38,
    userId: 10,
  },
];

export default mentalTest;
