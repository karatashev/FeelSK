export const getComments = async () => {
  return [
    {
      id: "1",
      body: "I had an amazing time in Skopje!",
      username: "Peter",
      userId: "1",
      parentId: null,
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Skopje is truly amazing, I had a great time and went to few music festivals",
      username: "Johanna",
      userId: "2",
      parentId: null,
      createdAt: "2022-06-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Mount Vodno and Milennial Cross are must visit! Amazing view to the city",
      username: "Peter",
      userId: "2",
      parentId: "1",
      createdAt: "2022-07-19T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "I agree, Skopje has music for every taste!",
      username: "Peter",
      userId: "2",
      parentId: "2",
      createdAt: "2022-07-22T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Vasil",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};