import request from 'supertest'; // import request library from supertest
import express from 'express'; // import express so we can create a mock server
import graphqlHTTP from 'express-graphql'; // import graphqlHTTP express library
import schema from '../../../setup/schema'; // import our graphql schema

// we create describe functions similar to RSpec
describe('user queries', async () => {
  let server = express();

  beforeAll(() => {
    server.use(
      "/",
      graphqlHTTP({
        schema: schema,
        graphiql: false,
        context: {
          auth: {
            user: {
              id: 2,
               role: 'USER'
            },
            isAuthenticated: true
          }
        }
      })
    )
  });

  it('creates user preference', async(done) => {
    const mutation = `mutation {
      preferenceCreate(description:"classic but edgy") {
        description
      }
    }`;
    const response = await request(server) 
      .post('/')
      .send({query: mutation})
      .expect(200)

      expect(response.body).toMatchObject({
        data: {
            preferenceCreate: {
              description: "classic but edgy"
            }
        }
      })
      done();
  })

  it('returns user preference', async(done) => {
    const query = `{
      user(id: 2){
        preference {
          description
        }
      }
    }`;

    const response = await request(server)
    .post('/')
    .send({query: query})
    .expect(200)

    expect(response.body).toMatchObject({
      data: {
        user: {
            preference: [
                {
                    description: "classic but edgy"
                }]
        }
      }
    })
    done();
  })
})