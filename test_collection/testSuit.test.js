const axios = require('axios');

describe('JSONPlaceholder API tests', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('GET /posts - should return list of posts', async () => {
    const response = await axios.get(`${baseURL}/posts`);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('GET /posts/1 - should return a single post', async () => {
    const response = await axios.get(`${baseURL}/posts/1`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
  });

  test('POST /posts - should create a new post', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    const response = await axios.post(`${baseURL}/posts`, newPost);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  test('GET /users - should return list of users', async () => {
    const response = await axios.get(`${baseURL}/users`);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('GET /users/1 - should return a single user', async () => {
    const response = await axios.get(`${baseURL}/users/1`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('username');
    expect(response.data).toHaveProperty('email');
  });
});