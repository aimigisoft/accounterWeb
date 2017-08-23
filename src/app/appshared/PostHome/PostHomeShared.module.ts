

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  



import {
    CommentRankComponent,
    NewestCommentComponent,
    PostCalendarComponent,
    PostSearchComponent,
    PostsRecordsComponent,
    PostUserProfileComponent,
    ReadRankComponent,
    RecommendRankComponent,
    UserPostCategoryComponent,
    UserPostTagsComponent,
    UsuallyLinksComponent,
    PostDetailComponent,
    PostInfoBlockComponent

} from './components';



@NgModule({
    imports: [
        CommonModule,
        
    ],
    declarations: [
        CommentRankComponent,
        NewestCommentComponent,
        PostCalendarComponent,
        PostSearchComponent,
        PostsRecordsComponent,
        PostUserProfileComponent,
        ReadRankComponent,
        RecommendRankComponent,
        UserPostCategoryComponent,
        UserPostTagsComponent,
        UsuallyLinksComponent,
        PostDetailComponent,
        PostInfoBlockComponent
    ],
    exports: [
        CommentRankComponent,
        NewestCommentComponent,
        PostCalendarComponent,
        PostSearchComponent,
        PostsRecordsComponent,
        PostUserProfileComponent,
        ReadRankComponent,
        RecommendRankComponent,
        UserPostCategoryComponent,
        UserPostTagsComponent,
        UsuallyLinksComponent,
        PostDetailComponent,
        PostInfoBlockComponent
    ]

})
export class PostHomeSharedModule {
}
