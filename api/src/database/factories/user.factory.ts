import Faker from 'faker'
import { User } from '../../users/user.entity'
import { define } from 'typeorm-seeding'

define(User, (faker: typeof Faker) => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
 
  const user = new User()
  user.username = faker.internet.userName(firstName, lastName)
  user.password = faker.internet.password()
  return user
})