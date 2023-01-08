const mockResponse = {
  data: {
    results: [
        {
          name: {
            first: "Laurie",
            last: "Roy"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/39.jpg"
          },
          login: {
            username: "SUPlaurie"
          }
      } 
    ]
  }
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}
