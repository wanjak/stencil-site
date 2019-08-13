import { Component, h } from '@stencil/core';
import blogStructure from '../../assets/blog/list.json';
import { BlogPostInterface } from '../../global/definitions'

@Component({
  tag: 'blog-list',
  styleUrl: 'blog-list.css'
})
export class BlogIndex {

  render() {
    return (
      <div class="container">
        <div class="blog-index">
        {
          (blogStructure as BlogPostInterface[]).map(post => {
            const authorSlug = post.author.toLowerCase().replace(' ', '-');
            return (
              <div class="blog-item">
                <h1>{post.title}</h1>
                <span class="post-meta">
                  <img class="post-author-image" src={`/assets/img/blog/authors/${authorSlug}.png`}/> {post.author}&nbsp;&nbsp;|&nbsp;&nbsp;{post.date}
                </span>
                <p>{post.description}</p>
                <stencil-route-link url={post.url}>
                  Read more
                  <app-icon name="arrow-right"></app-icon>
                </stencil-route-link>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}
