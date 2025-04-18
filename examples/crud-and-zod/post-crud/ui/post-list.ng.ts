import { Component, inject } from '@angular/core';

import { PostCrud } from '../post-crud.ng';

@Component({
  // ...
})
export class PostList {
  posts$ = inject(PostCrud).readMany();
}
