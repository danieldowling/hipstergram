import { Factory, Seeder } from "typeorm-seeding"
import { Connection } from "typeorm"
import { User } from "../../users/user.entity"
import { Post } from "../../posts/post.entity"
import { getRandomInt } from "../helpers"

export class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await factory(User)().map(async (user: User) => {
      const posts: Post[] = await factory(Post)().createMany(getRandomInt(2, 6))
      user.posts = posts
      return user;
    })
    .createMany(5)
  }
}