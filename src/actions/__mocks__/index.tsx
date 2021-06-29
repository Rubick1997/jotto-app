module.exports = {
  ...jest.requireActual(".."),
  __esModule: true,
  //update return value for Redux/context implementation
  getSecretWord: jest.fn().mockReturnValue({ type: "mock" }),
};

export {};
