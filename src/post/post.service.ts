// post.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async getAllPosts(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async getPostById(id: number): Promise<Post> {
    const post = await this.postRepository.findOneBy({id});
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async createPost(postDto: PostDto): Promise<Post> {
    const post = this.postRepository.create(postDto);
    return this.postRepository.save(post);
  }

  async updatePost(id: number, postDto: PostDto): Promise<Post> {
    const post = await this.postRepository.findOneBy({id});
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    Object.assign(post, postDto);
    return this.postRepository.save(post);
  }

  async deletePost(id: number): Promise<void> {
    const result = await this.postRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Post not found');
    }
  }
  async partialUpdatePost(id: number, postDto: PostDto): Promise<Post> {
    const post = await this.postRepository.findOneBy({id});
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    Object.assign(post, postDto);

    return this.postRepository.save(post);
  }
}
