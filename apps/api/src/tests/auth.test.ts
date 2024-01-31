// import { request, response } from 'express';
// import supertest from 'supertest';
// import App from '../app';
// import prisma from '../prisma';

// const app = new App().app;

// describe('TEST CRUD Operation', () => {
//   const dataSample = {
//     post: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
//     userId: 1,
//   };
//   let postId: number;

//   beforeEach(() => {
//     // Menyiapkan program yang ingin dijalankan terlebih dahulu sebelum running test
//   });

//   beforeAll(async () => {
//     // Menyiapkan program yang sekali dijalankan sebelum semua test dijalankan
//     await prisma.$connect();
//   });

//   afterEach(() => {});

//   afterAll(async () => {
//     await prisma.post.delete({ where: { id: postId } });

//     await prisma.$disconnect();
//   });
//   //GOOD CASE
//   it('should create a new post', async () => {
//     const response = await request.post('/auth/post').send(dataSample);

//     expect(response.status).toBe(201);
//     postId = response.body.id;
//   });

//   it('should get a specific post by ID', async () => {
//     const response = await request.get(`/auth/post/${postId}`);

//     expect(response.status).toBe(200);
//     expect(response.body.success).toBe(true);
//   });

//   //BAD CASE
//   it('should handle non-existent post ID for getting a specific post', async () => {
//     const response = await request.get('/auth/post/999');

//     expect(response.status).toBe(404);
//   });
// });
