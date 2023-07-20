// post.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './dto/post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: number) {
    return this.postService.getPostById(id);
  }

  @Post()
  async createPost(@Body() postDto: PostDto) {
    return this.postService.createPost(postDto);
  }

  @Put(':id')
  async updatePost(@Param('id') id: number, @Body() postDto: PostDto) {
    return this.postService.updatePost(id, postDto);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: number) {
    return this.postService.deletePost(id);
  }
  @Patch(':id')
  async partialUpdatePost(@Param('id') id: number, @Body() postDto: PostDto) {
    return this.postService.partialUpdatePost(id, postDto);
  }
}
