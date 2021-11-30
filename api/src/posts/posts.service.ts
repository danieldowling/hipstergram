import { User } from './../users/user.entity';
import { CreatePostDto } from './dto/post.dto';
import { PostsRepository } from './posts.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsRepository)
    private postsRepository: PostsRepository
  ) {}

  getAllPosts(postDto?: CreatePostDto) {
    return this.postsRepository.getPosts(postDto);
  }

  async getPostById(id: string): Promise<Post> {
    const post = await this.postsRepository.findOne(id);
    if(!post) throw new NotFoundException(`Post with ${id} not found.`);
    return post;
  }
  
  async deletePostById(id: string): Promise<void> {
    const res = await this.postsRepository.delete(id);
    if(res.affected === 0) throw new NotFoundException(`Post with ${id} not found.`);
  }

  async createPost(postDto: CreatePostDto, user: User): Promise<Post> {
    const { title, body } = postDto;
    const post = this.postsRepository.create({title, body, user})
    
    await this.postsRepository.save(post);
    return post;
  }
 
  async updatePost(id: string, postDto: CreatePostDto): Promise<Post> {
    let post = await this.getPostById(id);
    post = {...post, ...postDto};
    await this.postsRepository.save(post);
    return post;
  }
}
