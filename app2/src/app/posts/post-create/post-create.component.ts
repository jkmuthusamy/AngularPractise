import { PostsService } from './../post.service';
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent{
  enteredTitle = "";
  enteredContent = "";
  //@Output() postCreated = new EventEmitter<Post>();
  constructor(public postsService: PostsService){};
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
  // this.postCreated.emit(post);
    this.postsService.addPost(form.value.title, form.value.content);
  }


}
