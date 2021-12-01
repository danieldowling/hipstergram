import Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Post } from '../../posts/post.entity'
import { getRandomInt } from '../helpers'

define(Post, (faker: typeof Faker) => {
  const post = new Post()
  post.body = faker.random.words(getRandomInt(11, 21))
  post.title = faker.random.words(getRandomInt(3, 6))
  return post
})