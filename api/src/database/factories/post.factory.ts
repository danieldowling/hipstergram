import Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Post } from '../../posts/post.entity'
import { getRandomInt } from '../helpers'

define(Post, (faker: typeof Faker) => {
  const post = new Post()
  post.title = faker.lorem.sentence(getRandomInt(1, 3));
  post.body = faker.lorem.sentences(2);
  post.notice = getRandomInt(0, 95);
  return post
})