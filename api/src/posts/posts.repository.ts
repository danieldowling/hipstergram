import { User } from './../auth/user.entity';
import { CreatePostDto } from './dto/post.dto';
import { EntityRepository, Repository } from "typeorm";
import { Post } from "./post.entity";

@EntityRepository(Post)
export class PostsRepository extends Repository<Post> {
  async getPosts(postDto?: CreatePostDto): Promise<Post[]> {
    const {title, body} = postDto;
    const query = this.createQueryBuilder('post');
    if (title || body) {
      query.andWhere('(LOWER(post.title) LIKE LOWER(:title) OR LOWER(post.body) LIKE LOWER(:body))', {title: `%${title}%`, body: `%${body}%`})
    }
    const posts = await query.getMany();
    return posts;
  }
}
